<template>
	<div class="chart-item">
		<ve-histogram :data="chartData" :extend="extend" height="280px"></ve-histogram>
	</div>
</template>

<script>
	import axios from 'axios'
	import {request} from '@/network/request.js'
	export default{
		name:"ChartItem",
		data () {
			  this.extend = {
			          series: {
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
					  legend:{//图例
						  textStyle:{
							  color:"#FFF",
							  fontSize:18
						  },
					  }
		      }
		      return {
		        chartData: {
		          columns: ['厂区', '进入人次', '出去人次'],
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
				setInterval(self.getData,10000)
				
				// axios({
				// 	method:'get',
				// 	url:'http://192.168.1.145:8181/fac',
				// }).then( response => {
				// 	console.log(response);
				// 	self.chartData.rows=response.data;
				// })
			},
			methods:{
				getData(){
					const self = this;
					request({
						method:'post',
						url:'/employee/factory.php'
					}).then( response => {
						// console.log(response);
						self.chartData.rows=response;
					})
				}
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
