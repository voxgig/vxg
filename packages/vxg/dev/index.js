import Vue from 'vue'
import App from './App'
import router from './router'
import vxg from './vxg'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.performance = true

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === 'complete' }),
  vxg,
  router,
  render (h) {
    return this.isLoaded ? h(App) : undefined
  },
}).$mount('#app')

// Prevent layout jump while waiting for styles
vm.isLoaded || window.addEventListener('load', () => {
  vm.isLoaded = true
})
