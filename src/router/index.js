// 全体やること
// SignUp.vue css button色反転


//確認 store-10行目,auth(signup要変更かも)
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Complete from '../views/Complete.vue'
import Thanks from '../views/Thanks.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Search from '../views/Search.vue'
import ShopDetail from '../views/ShopDetail.vue'
import store from "../store/index"


Vue.use(VueRouter)


const routes = [
    {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SingUp',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true //認証許可
    }
  },
  {
    path: '/complete',
    name: 'Complete',
    component: Complete,
    meta: {
    requiresAuth: true //認証許可
    }
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks,
    meta: {
    requiresAuth: true //認証許可
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
    requiresAuth: true //認証許可
    }
  },
    {
    path: '/shopdetail/:id',
    name: 'ShopDetail',
    component: ShopDetail,
    meta: {
    requiresAuth: true //認証許可
      },
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//認証許可
router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) && !store.state.auth //storeフォルダ
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router
