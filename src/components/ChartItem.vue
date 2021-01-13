<template>
	<!-- 柱状图区域 -->
	<div class="chart-item">
		<ve-histogram :data="chartData" :extend="extend" :settings="chartSettings" height="280px"></ve-histogram>
	</div>
</template>

<script>
	import axios from 'axios'
	import {request} from '@/network/request.js'
	import * as echarts from 'echarts'
	export default{
		name:"ChartItem",
		data () {
			  this.extend = {
			          series: {//柱状图上方文字颜色
			            label: { show: true, position: "top",color:"#00FFFF",fontSize:14 },
			          },
					  xAxis:{//x轴
						  axisLabel:{
							  color:"",
							  fontSize:18
						  }
					    },
					  yAxis:{//y轴
						  axisLabel:{
						  	  color:"",
						  	  fontSize:18
						  }
					  },
					  legend:{//图例样式
						  textStyle:{
							  color:"#FFF",
							  fontSize:18
						  },
					  }
		      },
			  this.chartSettings = {//更改图例,对象名必须和下面的columns一直
				  legendName :{
					  '进入人次':'进入',
					  '出去人次':'出去'
					  }
			  }
		      return {
		        chartData: {
		          columns: ['厂区', '进入人次', '出去人次'],//这里请注意,该值与rows中的键名是一一对应的
		          rows: [
		            { '厂区': '秦一厂', '进入人次': 1393, '出去人次': 1093},
		            { '厂区': '秦二厂', '进入人次': 3530, '出去人次': 3230},
		            { '厂区': '秦三厂', '进入人次': 2923, '出去人次': 2623},
		            { '厂区': '秦四厂', '进入人次': 1723, '出去人次': 1423},
		          ]
		        },
				getdata:[],
				obj1:{},
				obj2:{},
				obj3:{},
				obj4:{},
				arr:[],
		      }
		    },
			created(){
				this.getData();
				setInterval(this.getData,10000)
			},
			methods:{
				getData(){
					request({
						method:'get',
						url:'/vue-api/person/records/statistics/person-time/fast/list?areaIdList=1&areaIdList=2&areaIdList=3&areaIdList=4'
					}).then(res =>{
						this.obj1['厂区']="秦一厂"
						this.obj1['进入人次']=res.data.inTimes[1]
						this.obj1['出去人次']=res.data.outTimes[1]
						this.arr.push(this.obj1)
						
						this.obj2['厂区']="秦二厂"
						this.obj2['进入人次']=res.data.inTimes[2]
						this.obj2['出去人次']=res.data.outTimes[2]
						this.arr.push(this.obj2)
						
						this.obj3['厂区']="秦三厂"
						this.obj3['进入人次']=res.data.inTimes[3]
						this.obj3['出去人次']=res.data.outTimes[3]
						this.arr.push(this.obj3)
						
						this.obj4['厂区']="方家山"
						this.obj4['进入人次']=res.data.inTimes[4]
						this.obj4['出去人次']=res.data.outTimes[4]
						this.arr.push(this.obj4)
						
						this.chartData.rows=this.arr
						
						this.arr=[];
						// this.arr.splice(0,this.arr.length);
					})
				},
			}
	}
</script>

<style>
	.chart-item{
		display: flex;
		height: 249px;
		flex: 1;
	}
	.ve-histogram{
		flex: 1;
		top: 30px;
		margin: 0 auto;
		align-self:center;
	}
</style>
