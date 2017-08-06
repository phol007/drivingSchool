import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import MainMenu from '@/components/main_menu'
import MNuser from '@/components/users/manage_user'
import MNowner from '@/components/users/manage_adm_own'
import MNEmploy from '@/components/users/manage_em_tec'
import MNCustomer from '@/components/users/manage_customer'
import MNCourse from '@/components/course/manage_course'
import TBTrain from '@/components/tableTrainning/calendar'

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
    },
    {
      path: '/mn_user_Employ',
      name: 'mn_user_Employ',
      component: MNEmploy
    },
    {
      path: '/mn_user_custo',
      name: 'mn_user_custo',
      component: MNCustomer
    },
    {
      path: '/mn_cors',
      name: 'mn_cors',
      component: MNCourse
    },
    {
      path: '/mn_schedule',
      name: 'mn_schedule',
      component: TBTrain
    }
  ]
})
