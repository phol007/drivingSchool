import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import MainMenu from '@/components/main_menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main_menu',
      name: 'main_menu',
      component: MainMenu
    }
  ]
})
