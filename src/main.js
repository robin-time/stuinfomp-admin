import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/styles/index.scss' // global css
import Cookies from 'js-cookie'
import App from './App'
import router from './router'
import store from './store'
import '@/icons' // icon

// set ElementUI lang to EN
Vue.use(ElementUI, {locale,
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
