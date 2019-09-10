import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./route.js";

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// config.autoAddCss = false;
library.add(faMoon)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
