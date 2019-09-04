import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./route.js";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
