import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Topics from '@/components/topics.vue'
import SignUp from '@/components/SignUp.vue'
import SignIn from '@/components/SignIn.vue'
import Books from '@/components/Books.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Темы',
      name: 'topics',
      component: Topics
    },
    {
      path:'/Регистрация',
      name: 'signup',
      component: SignUp
    },
    {
      path:'/Войти',
      name: 'signin',
      component: SignIn
    },
    {
      path:'/Тестовая',
      name: 'books',
      component: Books
    }

  ]
})
