import Vue from 'vue'
import VueRouter from 'vue-router'
import dataV from'@jiaminghi/data-view'

Vue.use(dataV)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
