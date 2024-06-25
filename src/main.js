import { createApp } from "vue"
import App from "./App.vue"
import router from "./route.js"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faMoon, faSun, faTimes, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
// import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faMoon, 
  faSun, 
  faTimes,
  faUpRightFromSquare, 
  faGithub
);

let app = createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)

app.config.performance = true;
app.mount("#app")
