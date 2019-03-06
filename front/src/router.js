import Vue from 'vue'
import Router from 'vue-router'
import { LOGIN, SIGN_UP } from './constants/routerConstant'
import LoginView from './views/Login.vue'
import SignUpView from './views/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: LOGIN,
      name: 'LOGIN',
      component: LoginView
    },
    {
      path: SIGN_UP,
      name: 'SIGN_UP',
      component: SignUpView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
