import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import'./assets/css/global.css'
import axios from 'axios'
import'./api/mock'


Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
