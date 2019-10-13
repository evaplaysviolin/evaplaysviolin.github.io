import Vue from "vue";
import VueRouter from "vue-router";

// import Banner from "./components/Banner.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      "header": Header,
      // "navigation": Navigation,
      // "featured-partners": FeaturedPartners,
      // "featured-galleries": FeaturedGalleries
    }
  },
  {
    path: "/about",
    name: "about",
    components: {
      "header": Header,
      default: About
      // "navigation": Navigation,
      // "sub-banner": SubBanner,
      // default: CollectionSearch
    }
  },
  // {
  //   path: "/partner/:database/:country/:id/:language",
  //   name: "partner",
  //   components: {
  //     "navigation": Navigation,
  //     "sub-banner": SubBanner,
  //     default: PartnerProfile,
  //   }
  // },
  // {
  //   path: "*",
  //   redirect: "/error"
  // }
];

export default new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
