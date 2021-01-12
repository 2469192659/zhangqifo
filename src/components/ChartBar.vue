<template>
	<!-- 柱状图外边框区域 -->
	<div class="chart-bar">
		<dv-border-box-13>
			<slot></slot>
		</dv-border-box-13>
	</div>
</template>

<script>
	export default{
		name:"ChartBar",
	}
</script>

<style>
	.chart-bar{
		display: flex;
		width: 90%;
		height: 249px;
		margin: 0 auto;
		padding-top: 20px;
		align-items: center;
	}
</style>
