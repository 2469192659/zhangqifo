<template>
  <div class="view">
    <!-- <dv-full-screen-container> -->
      <domainflex-1/>

      <domainflex-2/>

      <domainflex-3/>
    <!-- </dv-full-screen-container> -->
  </div>
</template>

<script>

import Domainflex1 from './Domainflex1.vue'
import Domainflex2 from './Domainflex2.vue'
import Domainflex3 from './Domainflex3.vue'

export default {
  components: { 
    Domainflex1,
    Domainflex2,
    Domainflex3 
  },
  
}
</script>

<style scoped>
	.view{
		width: 100%;
		height: 100%;
	}
</style>