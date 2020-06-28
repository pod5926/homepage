import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
  preLoad: 1.3,
  error: 'https://dummyimage.com/130x120/ccc/999.png&text=Not+Found',
  loading: 'https://dummyimage.com/130x120/dcdcdc/999.png&text=Now loading',
  attempt: 1
}).$mount('#app')
