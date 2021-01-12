<template>
  <div class="d-flex1">
    <div class="box1">
        <dv-border-box-13 style="height:280px;width:312px">
          <factorytotal/>
        </dv-border-box-13>
      </div>

      <div class="box2">
        <dv-border-box-13 style="height:280px; width: 100%">
          <div class="entity">
            <div v-for="item in ringList" :key="item.id">
              <div class="areaStyle">{{item.areaname}}</div>
              <entity></entity>
            </div>
          </div>
        </dv-border-box-13>
      </div>
  </div>
</template>

<script>

import Entity from './Entity.vue';
import Factorytotal from './Factorytotal.vue';

export default {

  components: {
    Entity,
    Factorytotal
  },

  data() {
    return {
        ringList: []

    };
  },

  mounted() {
    axios.get('http://192.168.1.145:8181/number').then((res) => {
      this.ringList = res.data
    })
  }
  
}
</script>

<style scoped>

.d-flex1 {
  display: flex;
  width: 95%;
  margin: 0 auto;
  padding-top: 50px;
  /* padding-left: 25px; */
}

.box1 {
  padding-top: 20px;
}

.box2 {
  flex: 1;
  padding-left: 10px;
  padding-top: 20px;
}

.entity {
  display: flex;
  justify-content:space-around;
  padding-top: 30px;
  flex-wrap: wrap;
}

.areaStyle{
  color: #1a626e;
  font-size: 35px;
  padding-left: 40px;
}

</style>