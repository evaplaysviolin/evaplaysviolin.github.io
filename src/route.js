import Vue from "vue";
import VueRouter from "vue-router";

// import Banner from "./components/Banner.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import AboutPage from "./components/AboutPage.vue";
import DesignPage from "./components/DesignPage.vue";
import CodePage from "./components/CodePage.vue";
import ContactPage from "./components/ContactPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      "header": HeaderComponent,
      // "navigation": Navigation,
      // "featured-partners": FeaturedPartners,
      // "featured-galleries": FeaturedGalleries
    },
    // props: { "header": true }
  },
  {
    path: "/about",
    name: "about",
    components: {
      "header": HeaderComponent,
      default: AboutPage
      // "navigation": Navigation,
      // "sub-banner": SubBanner,
      // default: CollectionSearch
    },
    // props: { "header": true }
  },
  {
    path: "/design",
    name: "design",
    components: {
      "header": HeaderComponent,
      default: DesignPage
      // "navigation": Navigation,
      // "sub-banner": SubBanner,
      // default: CollectionSearch
    },
    // props: { "header": true }
  },
  {
    path: "/code",
    name: "code",
    components: {
      "header": HeaderComponent,
      default: CodePage
      // "navigation": Navigation,
      // "sub-banner": SubBanner,
      // default: CollectionSearch
    },
    // props: { "header": true }
  },
  {
    path: "/contact",
    name: "contact",
    components: {
      "header": HeaderComponent,
      default: ContactPage
      // "navigation": Navigation,
      // "sub-banner": SubBanner,
      // default: CollectionSearch
    },
    // props: { "header": true }
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
