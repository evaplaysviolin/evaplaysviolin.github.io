<template>

<div id="app">

  <div id="page-container">

    <div id="header-container">
      asdf
    </div>

    <!-- Set up "views" for components -->
    <!-- Empty view is where main components for other pages is inserted -->
    <!-- Refer to route.js -->
    <!-- <router-view name="banner"></router-view>
    <router-view name="navigation"></router-view>
    <router-view name="sub-banner"></router-view>
    <router-view></router-view>
    <router-view name="featured-partners"></router-view>
    <router-view name="featured-galleries"></router-view> -->

    <div id="footer-container">
    </div>
  
  </div>

</div>

</template>



<script>

// import media from "./mixins/media.js";
export default {
  name: "App",
  // mixins: [media],
  data() {
    return {
    }
  },
  watch: {
    "$route" (to, from) {
    }
  },
  methods: {
  },
  mounted() {
  }
}

</script>



<style lang="scss">

/* See borders while designing pages */
// * {
//   border: 1px dashed red;
// }

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 100%;
}
*, ::before, ::after {
  box-sizing: border-box;
}

// body {
//   @include flex-center;
//   align-items: flex-start;
//   background-color: $lightest-blue;
// }

// #page-container {
//   @include flex-center;
//   flex-direction: column;
//   justify-content: flex-start;
//   width: 1350px;
//   max-width: 1350px;
//   box-shadow: 0 2px 8px 2px $shadow-grey;
// }

// #header-container {
//   @include flex-center;
//   position: relative;
//   justify-content: space-between;
//   height: 80px;
//   width: 100%;
//   color: $light-text;
//   background-color: $dark-blue;
// }
    
// #footer-container {
//   @include flex-center;
//   height: 40px;
//   width: 100%;  
//   font-size: 14px;
//   color: $light-text;
//   background-color: $dark-blue;
//   text-align: center;
// }

</style>
