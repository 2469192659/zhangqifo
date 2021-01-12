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
				getdata:[]
		      }
		    },
			created(){
				const self = this;
				// request({
				// 	method:'get',
				// 	url:'/vue-api/person/records/statistics/person-time/fast'+'?areaId=1'+'?direction=-1'
				// }).then( res=>{
				// 	console.log(res);
				// })
				
				// self.getData()
				// setInterval(self.getData,10000)
			},
			methods:{
				getData(){
					const self = this;
					request({
						method:'post',
						url:'/employee/factory.php'
					}).then( response => {
						self.chartData.rows=response;
					}).catch( err =>
					{
						console.log(err);
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
