// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from "vue-lazyload"
Vue.use(VueLazyLoad,{
  preload:1.3,
  error:"common/img/logo.png",
  loading:"common/img/logo.png",
  attemp:1
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
