import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import MainMenu from '@/components/main_menu'
import MNuser from '@/components/users/manage_user'
import MNowner from '@/components/users/manage_adm_own'

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
    },
    {
      path: '/mn_user',
      name: 'mn_user',
      component: MNuser
    },
    {
      path: '/mn_user_owner',
      name: 'mn_user_owner',
      component: MNowner
    }
  ]
})
