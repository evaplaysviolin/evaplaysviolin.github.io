import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./route.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMoon, faSun, faTimes, faGithub);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
