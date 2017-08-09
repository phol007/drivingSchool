import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/components/login')
const MainMenu = () => import('@/components/main_menu')
const MNuser = () => import('@/components/users/manage_user')
const MNowner = () => import('@/components/users/manage_adm_own')
const MNEmploy = () => import('@/components/users/manage_em_tec')
const MNCustomer = () => import('@/components/users/manage_customer')
const MNCourse = () => import('@/components/course/manage_course')
const TBTrain = () => import('@/components/tableTrainning/calendar')

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
