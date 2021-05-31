import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Complete from '../views/Complete.vue'
import Thanks from '../views/Thanks.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/complete',
    name: 'Complete',
    component: Complete
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
