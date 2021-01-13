<template>
	<!-- 表格组件 -->
	<div class="rotation">
		<el-table class="table_color" :data="config1" stripe style="width: 100%" height="93%" :row-class-name="tableRowClassName" :header-cell-style="getRowClass">
			<el-table-column prop="memberName" label="姓名" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column prop="idCard" label="身份证号" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column prop="areaName" label="所在区域" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column prop="deptName" label="部门"></el-table-column>
			<el-table-column prop="temp" label="体温"></el-table-column>
			<el-table-column prop="healthCode" label="健康码"></el-table-column>
			<el-table-column prop="direction" label="进出方向"></el-table-column>
			<el-table-column prop="deviceName" label="设备名称" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column prop="verifyTimeStamp" label="发生时间" :show-overflow-tooltip="true"></el-table-column>
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
