// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */

import Vue from 'vue'
import App from './App'
// import router from './router'

// http client
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// ui components


new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})
