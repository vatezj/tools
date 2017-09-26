// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$ajax = axios

import VueCookie from 'vue-cookie';
// Tell Vue to use the plugin 
Vue.use(VueCookie)

import VueLocalStorage from 'vue-ls';
Vue.use(VueLocalStorage);


import VueLazyComponent from '@xunlei/vue-lazy-component'

Vue.use(VueLazyComponent)

import'./assets/css/docs.css'
import'./assets/css/github-gist.css'
import'./assets/css/mdui.css'
import'./assets/css/railscasts.css'

import'./assets/js/mdui.min.js'
import swal from 'sweetalert'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})