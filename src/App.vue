<template>
  <div id="app">
	<!-- 外边框组件 -->
	<dv-border-box-11 title="人员出入管理系统">
	<!-- <Home></Home> -->
	<router-view></router-view>
	</dv-border-box-11>
  </div>
</template>
<script>
	import '@/assets/css/base.css'
	import Home from './views/Home.vue'
	export default {
	  name: 'App',
	  components:{
	    Home
	  },
	}
</script>
<style>
	html,body,#app{
	 		height: 100%;
	 		width: 100%;
		}
	body{
		margin: 0;
		padding: 0;
	}
	.dv-border-box-11{
		display: flex;
		flex-flow: column;
	}
</style>
