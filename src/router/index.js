import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Complete from '../views/Complete.vue'
import Thanks from '../views/Thanks.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import MyPage from '../views/MyPage.vue'
import Search from '../views/Search.vue'

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
    path: '/signup',
    name: 'SingUp',
    component: SignUp
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
  },
  {
  path: '/myPage',
  name: 'MyPage',
  component: MyPage
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
