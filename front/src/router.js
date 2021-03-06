import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
import { LOGIN, SIGN_UP, PROFILE, SEARCH, TRAININGS, ACTIVITIES,
  CHRONOMETER, CHRONOSEETIMES } from './constants/routerConstant'
import LoginView from './views/Login.vue'
import SignUpView from './views/SignUp.vue'
import ProfileView from './views/Profile.vue'
import InitialLoader from './views/InitialLoader.vue'
import SeacherView from './views/SeacherView.vue'
import Trainings from './views/Trainings.vue'
import Activities from './views/Activities.vue'
import Chronometer from './views/Chronometer.vue'
import ChronoSeeTimes from './views/ChronoSeeTimes.vue'
import { AUTHENTICATE } from './store/types/UserTypes'

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
      redirect: '/profile',
      beforeEnter: (to, from, next) => {
        checkUser(to, from, next)
      },
      children: [
        {
          path: PROFILE,
          name: 'PROFILE',
          component: ProfileView,
          beforeEnter: (to, from, next) => {
            checkUser(to, from, next)
          }
        },
        {
          path: SEARCH,
          name: 'SEARCH',
          component: SeacherView,
          beforeEnter: (to, from, next) => {
            checkUser(to, from, next)
          }
        }
      ]
    },
    {
      path: TRAININGS,
      name: 'TRAININGS',
      component: Trainings,
      beforeEnter: (to, from, next) => {
        checkUser(to, from, next)
      }
    },
    {
      path: ACTIVITIES,
      name: 'ACTIVITIES',
      component: Activities,
      beforeEnter: (to, from, next) => {
        checkUser(to, from, next)
      }
    },
    {
      path: CHRONOMETER,
      name: 'CHRONOMETER',
      component: Chronometer,
      beforeEnter: (to, from, next) => {
        checkUser(to, from, next)
      }
    },
    {
      path: CHRONOSEETIMES,
      name: 'CHRONOSEETIMES',
      component: ChronoSeeTimes,
      beforeEnter: (to, from, next) => {
        checkUser(to, from, next)
      }
    }
  ]
})

function checkUser (to, from, next) {
  if (sessionStorage.getItem('token') === null || sessionStorage.getItem('token') === undefined) {
    next({ path: '/auth/login' })
  } else {
    checkUserState()
    next()
  }
}

function checkUserState () {
  var obj = store.state.user
  if (Object.entries(obj).length === 0 && obj.constructor === Object | obj === undefined) {
    store.dispatch(AUTHENTICATE)
  }
}
