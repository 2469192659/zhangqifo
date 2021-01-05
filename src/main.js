import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from '../node_modules/v-charts/lib/histogram.common.js'
import VueAxios from 'vue-axios';
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.component(VCharts.name, VCharts)
Vue.use(VCharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
