<template>
	<!-- 表格组件 -->
	<div class="rotation">
		<el-table class="table_color" :data="config1" stripe style="width: 100%" height="93%" :row-class-name="tableRowClassName" :header-cell-style="getRowClass">
		  <el-table-column prop="name" label="姓名"></el-table-column>
		  <el-table-column prop="extEventCardNo" label="身份证号"></el-table-column>
			<el-table-column prop="extTemp" label="体温"></el-table-column>
			<el-table-column prop="healthCode" label="健康码"></el-table-column>
			<el-table-column prop="extEventDirection" label="进出方向"></el-table-column>
			<el-table-column prop="srcName" label="事件源名称" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column prop="srcParentIndex" label="设备号" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column prop="happenTime" label="发生时间"></el-table-column>
		</el-table>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:"Rotation",
		props:['config1'],
		data(){
			return{
				
			}
		},
		created(){
			// const self = this;
			// axios({
			// 	method:'post',
			// 	url:'http://localhost/employee/ecount.php'
			// }).then( response => {
			// 	console.log(response.data);
			// 	var json = response.data;
			// 	var arr1 = [];
			// 	for(let i in json){
			// 		arr1[i] = [];
			// 		for(let j in json[i]){
			// 			arr1[i].push(json[i][j]);
			// 		}
			// 	}
			// 	self.arr = arr1;
			// 	console.log(arr1);
			// }).catch( err => {
			// 	console.log(err);
			// })
			// this.config={data:[arr]}
			/*--------------------------------------------------------上面自己的*/
			
			// this.getdata()
			// this.timer = setInterval(this.getdata,2000)
			
		},
		methods:{
			 tableRowClassName ({ row, rowIndex }) {
			      if ((rowIndex + 1) % 2 === 0) {
			        return 'double';
			      } else {
			        return 'single';
			      }
			    }, 
				getRowClass ({ rowIndex }) {//表头颜色
			      if (rowIndex == 0) {
			        return 'background:#00baff'
			      } else {
			        return ''
			      }
			    },
		}
	}
</script>

<style>
	.rotation{
		display: flex;
		padding-top: 20px;
		width: 90%;
		height: 249px;
		margin: 0 auto;
		text-align: center;
	}
	.el-table{
		flex: 1;
	}
	.table_color .double {
	  background: #5555ff !important;
	}
	.table_color .single {
	  background: #55aaff !important;
	}
	.el-table thead{
		color: #FFFFFF !important;
	}
	.cell{
		text-align: center;
	}
</style>
