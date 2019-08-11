// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'

import '@/icons' // icon

axios.defaults.baseURL = 'http://127.0.0.1:9000/api/'
Vue.prototype.$axios = axios

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// axios({
//   url: 'http://127.0.0.1:9000/api/user/login',
//   method: 'post'
// }).then(res => {
//   console.log(res)
// })
