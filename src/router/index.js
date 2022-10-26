import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CityInfo from '../views/CityInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city/:cityInfo',
    name: 'CityInfo',
    component: CityInfo,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
