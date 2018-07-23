import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/sass/styles.scss'
import '../node_modules/load-awesome/css/square-jelly-box.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')