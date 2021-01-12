<template>
<div>
    <div>
      <ve-ring
      height="180px"
      width="180px"
      :data="ringData"
      :extend="ringExtend"
      :settings="ringSettings"
      :tooltip-visible="false">
      <div class="sss" v-for="item in totalData" :key="item">{{item.size}}</div>
      </ve-ring>
    </div>
    <slot></slot>
</div>
</template>

<script>

export default {
  
  data() {
    this.ringSettings= {
        radius: ['60px', '80px'],
        hoverAnimation:false
    }

    this.ringExtend = {
	      legend: { show: false },  
	      series: {
          center: ['50%', '50%'],

          labelLine: {
            show: false
          },
          
          itemStyle: {
          color: seriesIndex => {
            if (seriesIndex.dataIndex === 0) {
              return {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#3273ed' 
                  },
                  {
                    offset: 1,
                    color: '#0fec90' 
                  }
                ],
                global: false // 缺省为 false
              };
            } else {
              return '#dbdbe3';
            }
          }
        },

        
	    }
    };

    return {
      ringData: {
        columns: ['total','size'],
        rows: [
          
        ]
      },

      totalData: []

    };
  },

  created() {
    this.getData();
    this.timer = setInterval(this.getData,2000);
  },

  methods: {
    
    getData(){
      axios.get('http://192.168.1.145:8181/area').then((res) => {
        this.ringData.rows = res.data
      })
    },

    beforDestroy() {
      clearInterval(this.timer)
    }
  },
}
</script>

<style scoped>
.sss {
  padding-left: 50px;
  margin-top: -120px;
  font-size: 35px;
  color: #1a626e;
}
</style>