import Vue from 'vue'
import Router from 'vue-router'
import { LOGIN, SIGN_UP, PROFILE, SEARCH, TRAININGS, ACTIVITIES } from './constants/routerConstant'
import LoginView from './views/Login.vue'
import SignUpView from './views/SignUp.vue'
import ProfileView from './views/Profile.vue'
import InitialLoader from './views/InitialLoader.vue'
import SeacherView from './views/SeacherView.vue'
import Trainings from './views/Trainings.vue'
import Activities from './views/Activities.vue'

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
    },
    {
      path: '',
      name: 'InitialLoader',
      component: InitialLoader,
      children: [
        {
          path: PROFILE,
          name: 'PROFILE',
          component: ProfileView
        },
        {
          path: SEARCH,
          name: 'SEARCH',
          component: SeacherView
        }
      ]
    },
    {
      path: TRAININGS,
      name: 'TRAININGS',
      component: Trainings
    },
    {
      path: ACTIVITIES,
      name: 'ACTIVITIES',
      component: Activities
    }
  ]
})
