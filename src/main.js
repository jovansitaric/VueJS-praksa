import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./../node_modules/bulma/css/bulma.css";
import axios from 'axios';
// import Vuex from 'vuex';

Vue.config.productionTip = false
window.axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
