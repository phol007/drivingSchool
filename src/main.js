// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './css/style.css'
import 'babel-polyfill'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Resource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Resource)

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'grey',
      hue: 700
    },
    accent: 'red'
  },
  teal: {
    primary: 'blue',
    accent: 'pink'
  },
  purple: {
    primary: 'purple',
    accent: 'orange'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
