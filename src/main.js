import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import startQiankun from "./micro/index";
import apps from "./micro/apps";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#main-app')
startQiankun(apps);
