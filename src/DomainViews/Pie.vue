<template>
  <div class="pie">
    <ve-pie 
      :title="pietitle"
      width="312px"
      height="300px" 
      :data="chartData" 
      :settings="chartSettings" 
      :legend-visible="false"></ve-pie>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      radius: '80',
      offsetY: 150
    }

    this.pietitle = {
      text: "各区域人数占比",
      x: "center",
      textStyle: {
        color: "white",
        fontSize: 20
      }
    }

    timer:''

    return {
      chartData: {
        columns: ['area','number'],
        rows: []
      },
    }

  },

  created() {
    this.getData();
    this.timer = setInterval(this.getData,2000);
  },

  methods:{
    getData(){
      axios.get('http://192.168.1.145:8181/index').then((res) =>{
      this.chartData.rows = res.data
    })
    },

    beforDestroy() {
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
.pie {
  padding-top: 20px;
}
</style>