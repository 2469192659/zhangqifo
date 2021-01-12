<template>
  <div class="factorytotal">
    <div class="factoryStyle" v-for="item in factoryData" :key="item.id">{{item.area}}实时人数</div>
    <div class="nowtotal" v-for="item in factoryData" :key="item.id">当前总人数:&emsp;{{item.nownumber}}</div>
    <div class="nowtotal" v-for="item in factoryData" :key="item.id">离开总人次:&emsp;{{item.outnumber}}</div>
    <div class="nowtotal" v-for="item in factoryData" :key="item.id">进入总人次:&emsp;{{item.innumber}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      factoryData:[]
    }

    timer: ''
  },

  created() {
    this.getData();
    this.timer = setInterval(this.getData,2000);
  },

  methods:{
    getData(){
      axios.get('http://192.168.1.145:8181/factory').then((res) =>{
      this.factoryData = res.data
    })
    },

    beforDestroy() {
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'UnidreamLED';
  src: url('../assets/css/led/UnidreamLED.eot');
  src: url('../assets/css/led/UnidreamLED.eot?#iefix')format('embedded-opentype'),
  url('../assets/css/led/UnidreamLED.woff')format('woff'),
  local('UnidreamLED'), url("../assets/css/led/UnidreamLED.woff");
}

.factoryStyle {
  color: white;
  font-size: 20px;
  padding-left: 31px;
  padding-top: 20px;
}

.nowtotal {
  font-family: 'UnidreamLED';
  color: white;
  font-size: 30px;
  padding-left: 30px;
  padding-top: 20px;
  cursor:pointer;
  
}
</style>