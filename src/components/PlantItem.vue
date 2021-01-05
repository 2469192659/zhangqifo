<template>
	<div class="plant-item">
		<slot name="item-icon"></slot>
		<!-- <div class="item-name"><slot name="item-name"></slot></div> -->
	</div>
</template>

<script>
	export default{
		name:"PlantItem"
	}
</script>

<style>
	.plant-item{
		flex: 1;
		/* cursor:pointer */
	}
	
	/* .item-name{
		color: aqua;
		font-size:26px;
		text-align:center;
		transition:all 0.1s;
		text-shadow:1px 1px 1px #00FF00;
	}
	.item-name:hover{ 
		text-shadow:6px 6px 6px #00FF00;
	} */
</style>
