import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./../node_modules/bulma/css/bulma.css";
import axios from 'axios';
import Vuex from 'vuex';

Vue.config.productionTip = false
window.axios=axios

Vue.use(Vuex)

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
