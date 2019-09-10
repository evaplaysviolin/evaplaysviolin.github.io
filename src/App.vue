<template>

<div id="app">

  <div id="node-garden-container"></div>
  <!-- <svg class="moon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
    <path d="M86.576,84.239c-0.102-0.44-0.448-0.781-0.889-0.876c-1.441-0.311-2.879-0.689-4.271-1.127  C66.969,77.707,55.8,66.938,50.77,52.692C45.739,38.445,47.67,23.05,56.07,10.454c0.812-1.218,1.692-2.415,2.617-3.559  c0.284-0.351,0.339-0.834,0.143-1.24C58.632,5.25,58.219,4.994,57.768,5c-4.879,0.064-9.708,0.928-14.354,2.568  c-23.396,8.261-35.71,34.016-27.449,57.412c8.261,23.397,34.017,35.711,57.414,27.45c4.645-1.64,8.945-3.999,12.783-7.014  C86.516,85.138,86.678,84.679,86.576,84.239z">
    </path>
  </svg> -->
  <div id="moon-container">
    <font-awesome-icon :icon="['fas', 'moon']" />
  </div>

  <div id="page-container">

    <div id="header-container">header?</div>

    <!-- Set up "views" for components -->
    <!-- Empty view is where main components for other pages is inserted -->
    <!-- Refer to route.js -->
    <!-- <router-view name="banner"></router-view>
    <router-view name="navigation"></router-view>
    <router-view name="sub-banner"></router-view>
    <router-view></router-view>
    <router-view name="featured-partners"></router-view>
    <router-view name="featured-galleries"></router-view> -->

    <div id="footer-container">footer?</div>
  
  </div>

</div>

</template>



<script>

import NodeGarden from './vendors/nodegarden.js';


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
    const pixelRatio = window.devicePixelRatio;
    const $container = document.getElementById('node-garden-container');
    const $moon = document.getElementById('moon-container');

    const nodeGarden = new NodeGarden($container);

    // start simulation
    nodeGarden.start();

    // trigger nightMode automatically
    const date = new Date();

    if (date.getHours() > 18 || date.getHours() < 6) {
      nodeGarden.toggleNightMode();
    }

    let resetNode = 0;

    $container.addEventListener('click', (e) => {
      const bcr = $container.getBoundingClientRect();
      const scrollPos = {
        x: window.scrollX,
        y: window.scrollY
      };
      resetNode++;
      if (resetNode > nodeGarden.nodes.length - 1) {
        resetNode = 1;
      }
      nodeGarden.nodes[resetNode].reset({
        x: (e.pageX - scrollPos.x - bcr.left) * pixelRatio,
        y: (e.pageY - scrollPos.y - bcr.top) * pixelRatio,
        vx: 0,
        vy: 0
      });
    });

    $moon.addEventListener('click', () => {
      nodeGarden.toggleNightMode();
    });

    window.addEventListener('resize', () => {
      nodeGarden.resize();
    });
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

body {
  height: 100%;
}

#app {
  height: 100%;
}

#node-garden-container {
  height: 100%;
  width: 100%;
  position: fixed;
}

body {
  background-color: #f5f5f5;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;
}
  body.nightmode {
    background-color: #0a0a0a;
  }
  body.nightmode #moon-container {
    color: #fff;
  }
  body.nightmode #moon-container:hover {
    background-color: #fefefe;
    color: #000;
  }

#moon-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 45px;
  height: 45px;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:background-color 0.2s ease-in-out;
}
#moon-container:hover {
  background-color:#0a0a0a;color:#fff
}



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
