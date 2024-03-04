import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'
import router from './router/Index'


import '@asika32764/vue-animate/dist/vue-animate.css'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
