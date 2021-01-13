<template>
	<div id="">
		
		
			<!-- 厂区组件 -->
			<plant-area></plant-area>
			<!-- 分割线组件 -->
			<div class="division">
				<dv-decoration-12 style="width:50px;height:50px;" />
				<dv-decoration-10 style="width:100%;height:5px;" />
			</div>
			<!-- 柱状图组件 -->
			<chart-bar>
				<chart-item></chart-item>
			</chart-bar>
			<!-- 轮播组件 -->
			<Rotation :config1="config"></Rotation><!--:config1="config" -->
		
	</div>
		
	
	
</template>

<script>
	import axios from 'axios'
	import {request} from '@/network/request.js'
	import PlantArea from '../components/PlantArea.vue'
	import ChartBar from '../components/ChartBar.vue'
	import ChartItem from '../components/ChartItem.vue'
	import Rotation from '../components/Rotation.vue'
export default{
	name:"Home",
	components:{
		// TitleBar,
		PlantArea,
		ChartBar,
		ChartItem,
		Rotation
	},
	
	data(){
		return{
			"config":[
				// {
				//   memberName: '',
				//   idCard: '',
				//   areaName:'',
				//   deptName:'',
				//   temp: '',
				//   healthCode:'',
				//   direction:'',
				//   deviceName:'',
				//   verifyTimeStamp:''
				// },
				],
				getData:[]
		}
	},
	created(){
		this.getForm()
		setInterval(this.getForm,5000)
	},
	methods:{
		getForm(){
			request({
				method:'get',
				url:'/vue-api/person/info/list/'+'1'+'?pageSize=4'
			}).then( res=>{
				// console.log(res.data.records);
				self.getData=res.data.records;
				self.getData.forEach(item =>{
					item.direction=item.direction===1? '进入' : '出去';
					item.idCard=item.idCard.length===18? item.idCard.substr(0,6)+"********"+item.idCard.substr(14) : item.idCard;
					item.temp=item.temp? item.temp.toFixed(1) : item.temp;
					item.healthCode=item.healthCode==="绿码"? '绿码' : '健康码异常';
				})
				this.config=res.data.records
			})
		}
	}
}

</script>

<style>
	/* #test{
	  height: 100%;
	  position: absolute;
	  top: 0px;
	  left: 0px;
	  width: 100%;
	  background-color: black;
	  text-align: center;
	} */
	body{
	  height: 100%;
	  position: absolute;
	  top: 0px;
	  left: 0px;
	  width: 100%;
	  /* background-color: black; */
	  text-align: center;
	}
	.dv-border-box-11{
		display: flex;
		flex-flow: column;
	}
	.division{
		display: flex;
		/* flex: 33.3333% 0 0; */
		padding-top: 20px;
		width: 90%;
		height: 50px;
		margin: 0 auto;
	}
	.division .dv-decoration-10{
		padding-top: 15px;
	}
	::-webkit-scrollbar {display:none}
	
</style>
