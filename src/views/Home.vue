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
			"config":[{
				  Name: '王小虎',
				  IdNum: '330881********3919',
				  temp: '36.8',
				  helthy:'健康',
				  ExtEventInOut:'0',
				  srcName:'asdafs',
				  srcParentIndex:'safasgasd',
				  happenTime:'2020/12/15'
				}, 
				{
				  Name: '王小虎',
				  IdNum: '330881********3919',
				  temp: '36.8',
				  ExtEventInOut:'0',
				  srcName:'asdafs',
				  srcParentIndex:'safasgasd',
				  happenTime:'2020/12/15'
				},
				{
				  Name: '王小虎',
				  IdNum: '330881********3919',
				  temp: '36.8',
				  ExtEventInOut:'0',
				  srcName:'asdafs',
				  srcParentIndex:'safasgasd',
				  happenTime:'2020/12/15'
				},
				{
				  Name: '王小虎',
				  IdNum: '330881********3919',
				  temp: '36.8',
				  ExtEventInOut:'0',
				  srcName:'asdafs',
				  srcParentIndex:'safasgasd',
				  happenTime:'2020/12/15'
				},
				{
				  Name: '王小虎',
				  IdNum: '330881********3919',
				  temp: '36.8',
				  ExtEventInOut:'0',
				  srcName:'asdafs',
				  srcParentIndex:'safasgasd',
				  happenTime:'2020/12/15'
				}],
		}
	},
	created(){
		// const self = this;
		// request({
		// 	method:'post',
		// 	url:'/employee/ecount.php'
		// }).then( response => {
		// 	var json = response;
		// 	var arr1 = [];
		// 	for(let i in json){
		// 		arr1[i] = [];
		// 		for(let j in json[i]){
		// 			arr1[i].push(json[i][j]);
		// 		}
		// 	}
		// 	// console.log(arr1);
		// 	this.config={
		// 		header:['姓名', '厂区', '状态'],
		// 		data:arr1,
		// 		index: true,
		// 		columnWidth: [50],
		// 		align: ['center'],
		// 	}
		// }).catch( err => {
		// 	console.log(err);
		// })
		
		// this.getdata()
		// this.timer = setInterval(this.getdata(),2000)
		
		
	},
	// methods:{
	// 	getdata(){
	// 			axios({
	// 				method:'get',
	// 				url:'http://192.168.1.145:8181/human'
	// 			}).then( res => {
	// 				console.log(res.data);
	// 				this.config={
	// 					header:['id','姓名', '厂区', '状态'],
	// 					data:res.data,
	// 					index: true,
	// 					columnWidth: [50],
	// 					align: ['center'],
	// 					}
	// 			})
	// 		}
	// }
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
