<template>
  <div class="d-flex2">
    <div class="ps1" @click="toHome">
        <dv-decoration-9 style="width:80px;height:80px;color:red;cursor:pointer;">首页</dv-decoration-9>
    </div>

    <div class="ps2">
      <dv-decoration-10 style="width:98%;height:100px;"/>
    </div>
  </div>
</template>

<script>
export default {
	methods:{
		toHome(){
			this.$router.push('/home')
		}
	}
  
}
</script>

<style scoped>
.d-flex2 {
  display: flex;
  width: 95%;
  margin: 0 auto;
  padding-top: 50px;
  /* padding-left: 25px; */
}

.ps1 {
  display: flex;
  align-items: center;
  padding-top: 7px;
}

.ps2 {
  flex: 1;
  padding-left: 10px;
}
</style>