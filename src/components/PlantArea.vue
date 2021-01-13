<template>
	<!-- 厂区人数显示区域组件 -->
	<div class="plant-area">
		<dv-border-box-8 :reverse="true" :dur=10>
			<plant-item title="秦一厂">
				<div slot="item-icon" @click="jump1"><dv-active-ring-chart :config="config1" style="height:249px" /></div>
			</plant-item>
			<plant-item title="秦二厂">
				<div slot="item-icon" @click="jump2"><dv-active-ring-chart :config="config2" style="height:249px" /></div>
			</plant-item>
			<plant-item title="秦三厂">
				<div slot="item-icon" @click="jump3"><dv-active-ring-chart :config="config3" style="height:249px" /></div>
			</plant-item>
			<plant-item title="秦四厂">
				<div slot="item-icon" @click="jump4"><dv-active-ring-chart :config="config4" style="height:249px" /></div>
			</plant-item>
			<!-- <plant-item>
				<div slot="item-icon"><dv-active-ring-chart :config="config4" style="height:249px" /></div>
			</plant-item>
			<plant-item>
				<div slot="item-icon"><dv-active-ring-chart :config="config4" style="height:249px" /></div>
			</plant-item>
			<plant-item>
				<div slot="item-icon"><dv-active-ring-chart :config="config4" style="height:249px" /></div>
			</plant-item>
			<plant-item>
				<div slot="item-icon"><dv-active-ring-chart :config="config4" style="height:249px" /></div>
			</plant-item> -->
		</dv-border-box-8>
	</div>
</template>

<script>
	import {request} from '@/network/request.js'
	import PlantItem from './PlantItem.vue'
	export default{
		name:"PlantArea",
		components:{
			PlantItem
		},
		data(){
			return{
				"config1":{
					radius: '40%',
					  activeRadius: '45%',
					  data: [
					    {
					      name: '秦一厂',
					      value: 55
					    },
					  ],
					  digitalFlopStyle: {
					    fontSize: 20
					  },
					  showOriginValue: true
				},
				"config2":{
					radius: '40%',
					  activeRadius: '45%',
					  data: [
					    {
					      name: '秦二厂',
					      value: 120
					    },
					  ],
					  digitalFlopStyle: {
					    fontSize: 20
					  },
					  showOriginValue: true
				},
				"config3":{
					radius: '40%',
					  activeRadius: '45%',
					  data: [
					    {
					      name: '秦三厂',
					      value: 80
					    },
					  ],
					  digitalFlopStyle: {
					    fontSize: 20
					  },
					  showOriginValue: true
				},
				"config4":{
					radius: '40%',
					  activeRadius: '45%',
					  data: [
					    {
					      name: '秦四场',
					      value: 100
					    },
					  ],
					  digitalFlopStyle: {
					    fontSize: 20
					  },
					  showOriginValue: true
				}
			}
		},
		created() {
			const self = this;
			setInterval(self.getNum,1000)
			
		},
		methods:{
			getNum(){
				const self = this;
				request({
					method:'get',
					url:'/vue-api/person/number'+'?areaId=1'
				}).then( res =>{
					let num1= res.data.areaPersonNumber
					self.config1 = {
						radius: '45%',
						  activeRadius: '45%',
						  data: [
						    {
						      name: '秦一厂',
						      value: num1
						    },
						  ],
						  digitalFlopStyle: {
						    fontSize: 20
						  },
						  showOriginValue: true
					};
					request({
						method:'get',
						url:'/vue-api/person/number'+'?areaId=2'
					}).then( res2 =>{
						let num2 = res2.data.areaPersonNumber
						self.config2 = {
							radius: '45%',
							  activeRadius: '45%',
							  data: [
							    {
							      name: '秦二厂',
							      value: num2
							    },
							  ],
							  digitalFlopStyle: {
							    fontSize: 20
							  },
							  showOriginValue: true
						};
						request({
							method:'get',
							url:'/vue-api/person/number'+'?areaId=3'
						}).then( res3 =>{
							let num3 = res3.data.areaPersonNumber
							self.config3 = {
								radius: '45%',
								  activeRadius: '45%',
								  data: [
								    {
								      name: '秦三厂',
								      value: num3
								    },
								  ],
								  digitalFlopStyle: {
								    fontSize: 20
								  },
								  showOriginValue: true
							};
							request({
								method:'get',
								url:'/vue-api/person/number'+'?areaId=4'
							}).then( res4 =>{
								let num4 = res4.data.areaPersonNumber
								self.config4 = {
									radius: '45%',
									  activeRadius: '45%',
									  data: [
									    {
									      name: '方家山',
									      value: num4
									    },
									  ],
									  digitalFlopStyle: {
									    fontSize: 20
									  },
									  showOriginValue: true
								};
							}).catch( err =>{
								console.log(err);
							})
						})
					})
				}).catch( err =>{
					// console.log(err);
				})
			},
			jump1(){
				this.$router.push({path:'/domainview',query:{id:'1'}})
			},
			jump2(){
				this.$router.push({path:'/domainview',query:{id:'2'}})
			},
			jump3(){
				this.$router.push({path:'/domainview',query:{id:'3'}})
			},
			jump4(){
				this.$router.push({path:'/domainview',query:{id:'4'}})
			}
		},
		
	}
</script>

<style>
	.plant-area{
		width: 90%;
		height: 249px;
		margin: 0 auto;
		padding-top: 70px;
	}
	.dv-border-box-8 .border-box-content{
		/* 内边框样式 */
		display: flex;
	}
	
</style>
