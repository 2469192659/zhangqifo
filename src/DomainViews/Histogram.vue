<template>
  <div class="histogram">
    <ve-histogram 
      height="280px"
      :x-axis="xAxis"
      :y-axis="yAxis"
      :data="hisData" 
      :extend="extend"></ve-histogram>
  </div>
</template>

<script>
export default {
  data() {
    this.extend = {
      series: {
        label:{show: true, position:"top"}
      },
      legend: {
        textStyle: {
          color: "white"
        }
      },
    }

    this.yAxis = {
      axisLabel: {
        show: true,
        textStyle: {
          color: "white",
        }
      }
    }

    this.xAxis = [
      {
        data: [
          "区域一",
          "区域二",
          "区域三",
          "区域四"
        ],
        axisLabel: {
          show: true,
          textStyle: {
            color: "white"
          }
        }
      }
    ]

    timer: ''

    return {

      hisData: {
        columns: ['area','innumber','outnumber'],
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
      axios.get('http://192.168.1.145:8181/histogram').then((res) =>{
      this.hisData.rows = res.data
    })
    },

    beforDestroy() {
      clearInterval(this.timer)
    }
  }

}
</script>

<style scoped>
.histogram {
  padding-top: 40px;
}
</style>