<template>
  <div class="d-flex3">
      <div class="box1">
        <dv-border-box-13 style="height:300px;width:312px">
          <pie/>
        </dv-border-box-13>
      </div>

      <div class="box2">
        <dv-border-box-13 style="height:300px; width: 100%">
          <histogram/>
        </dv-border-box-13>
      </div>
    </div>
</template>

<script>
import Histogram from './Histogram.vue'
import Pie from './Pie.vue'
export default {

  components: { Pie, Histogram },

  data() {
    return {}
  }
}
</script>

<style scoped>
.d-flex3 {
  display: flex;
  width: 95%;
  margin: 0 auto;
  padding-top: 50px;
  /* padding-left: 25px; */
}

.box2 {
  flex: 1;
  padding-left: 10px;
}
</style>