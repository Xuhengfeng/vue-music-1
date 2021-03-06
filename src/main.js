// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import './assets/stylus/index.styl'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

FastClick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('../static/img/default.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
