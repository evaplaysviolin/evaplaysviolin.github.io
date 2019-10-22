import Vue from "vue";
import VueRouter from "vue-router";

// import Banner from "./components/Banner.vue";
import Header from "./components/Header.vue";
import Resume from "./components/Resume.vue";
import About from "./components/About.vue";
import Design from "./components/Design.vue";
import Code from "./components/Code.vue";
import Contact from "./components/Contact.vue";

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
    },
    // props: { "header": true }
  },
  {
    path: "/resume",
    name: "resume",
    components: {
      "header": Header,
      default: Resume
      // "navigation": Navigation,
      // "sub-banner": SubBanner,
      // default: CollectionSearch
    },
    // props: { "header": true }
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
    },
    // props: { "header": true }
  },
  {
    path: "/design",
    name: "design",
    components: {
      "header": Header,
      default: Design
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
      "header": Header,
      default: Code
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
      "header": Header,
      default: Contact
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
