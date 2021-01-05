<template>
	<div id="box">
		<dv-border-box-1>
			<div class="title"><slot name="title"></slot></div>
			<div class="count"><slot name="count"></slot></div>
		</dv-border-box-1>
	</div>
</template>

<script>
	export default{
	  name:"box"
	}
</script>

<style>
	#box{
	 width: 500px;
	 height: 300px;
	 margin-top: 30px;
	 margin: 0 auto;
	}
	.title{
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	.count{
		width: 200px;
		text-align: center;
		margin: 0 auto;
		padding-top: 45px;
	}
</style>
