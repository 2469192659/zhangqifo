<template>
	<div id="title-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:"TitleBar"
	}
</script>

<style>
	#title-bar{
		display: flex;
		height: 70px;
		text-align: center;
		margin: 0 auto;
	}
	.left, .right {
	  width: 300px;
	}
	
	.center {
	  flex: 1;
	}
	
</style>
