// import Vue from "vue";
// import VueRouter from "vue-router";
import { createApp } from "vue"
import { createRouter, createWebHistory } from 'vue-router'

// import Banner from "./components/Banner.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import AboutPage from "./components/AboutPage.vue";
import DesignPage from "./components/DesignPage.vue";
import CodePage from "./components/CodePage.vue";
import ContactPage from "./components/ContactPage.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      "header": HeaderComponent,
    },
  },
  {
    path: "/about",
    name: "about",
    components: {
      "header": HeaderComponent,
      default: AboutPage
    },
  },
  {
    path: "/design",
    name: "design",
    components: {
      "header": HeaderComponent,
      default: DesignPage
    },
  },
  {
    path: "/code",
    name: "code",
    components: {
      "header": HeaderComponent,
      default: CodePage
    },
  },
  {
    path: "/contact",
    name: "contact",
    components: {
      "header": HeaderComponent,
      default: ContactPage
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/error"
  },
];

// export default new VueRouter({
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     return window.scrollTo({ top: 0, behavior: "smooth" });
//   }
// });

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
      return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

export default router;
