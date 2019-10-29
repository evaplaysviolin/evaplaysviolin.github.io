<template>

<div id="app">

  <div id="page-container">

    <!-- Contains node garden serving as background -->
    <div id="background-container" 
      ref="backgroundContainer" 
      @click.stop.prevent="gardenListener($event, $refs.backgroundContainer, 'background', 'resetNode')">
      <!-- Show menu on home page, otherwise only display the node garden -->
      <Menu v-if="$route.path === '/'" :night="night"></Menu>
    </div>

    <!-- Placeholder section for header component -->
    <div id="header-section">
      <div id="mode-container" @click="nightToggle()">
        <div id="mode">
          <font-awesome-icon :icon="['fas', 'moon']" v-if="!night" />
          <font-awesome-icon :icon="['fas', 'sun']" v-else />
        </div>
      </div>
    </div>

    <!-- Header is placed into "header-section" -->
    <router-view name="header" :night="night"></router-view>
    <!-- Container for sub-pages -->
    <div id="subpage-container" :class="{ 'subpage-container-index': $route.path === '/' }">
    <!-- Set up "views" for components -->
    <!-- Empty view is where main components for other pages is inserted -->
    <!-- Refer to route.js -->
    <!-- <router-view name="banner"></router-view> -->
      <!-- "Page" content is placed inside here -->
      <!-- Borders outlining the "page" are created here (canvas is for night mode) -->
      <div id="subpage" ref="subpage" :class="subpage">
        <canvas 
          id="subpage-borders"
          ref="subpageBorders"
          v-show="$route.path !== '/' && night">
        </canvas>
        <router-view :night="night"></router-view>
      </div>
    <!-- <router-view name="featured-partners"></router-view> -->
    </div>
  
  </div>

</div>

</template>



<script>

// Node garden code
import NodeGarden from './vendors/nodegarden.js';
// Node garden mixins
import garden from "./mixins/garden.js";
import Menu from "./components/Menu.vue";
// import media from "./mixins/media.js";
export default {
  name: "App",
  // mixins: [media],
  mixins: [garden],
  components: {
    "Menu": Menu
  },
  data() {
    return {
      // pixelRatio: window.devicePixelRatio,
      // Contains node garden
      background: {},
      // date: new Date(),
      // Keeps track of nodes on the page
      resetNode: 0,
      // Night mode controller
      night: false,
      // appHeight: null,
      // appWidth: null,
    }
  },
  // watch: {
  //   "$route" (to, from) {
  //     this.resizeApp();
  //   }
  // },
  computed: {
    // Applies correct borders to #subpage depending on day/night mode
    subpage: function() {
      return {
        "subpage-day": this.$route.path !== "/" && !this.night,
        "subpage-night": this.$route.path !== "/" && this.night
      }
    }
  },
  methods: {
    // Controls "night" prop, which controls night mode (checking prop)
    // toggleNightMode() is inside nodegarden.js
    nightToggle() {
      // this.night = !this.night;
      this.night = !this.night;
      // this.nodeGarden.toggleNightMode();
      this.background.toggleNightMode(this.night);
      this.resizeApp();
      this.createSubpageCanvas();
    },
    // Create left and right borders for night mode subpages
    createSubpageCanvas() {
      let canvas = this.$refs.subpageBorders;
      let ctx = canvas.getContext("2d");
      let container = this.$refs.subpage;
      let measurements = container.getBoundingClientRect();
      canvas.width = measurements.width;
      canvas.height = measurements.height;
      let w = canvas.width;
      let h = canvas.height;
      let lineGradient = ctx.createLinearGradient(0, 0, 0, h);
      lineGradient.addColorStop("0", `rgb(222, 22, 79)`);
      lineGradient.addColorStop("0.5" , `rgb(42, 67, 232)`);
      lineGradient.addColorStop("1.0", `rgb(47, 189, 40)`);
      ctx.strokeStyle = lineGradient;
      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.moveTo(1, 0);
      ctx.lineTo(1, h);
      ctx.stroke();

      let reverseLineGradient = ctx.createLinearGradient(0, 0, 0, h);
      reverseLineGradient.addColorStop("0", `rgb(47, 189, 40)`);
      reverseLineGradient.addColorStop("0.5" , `rgb(42, 67, 232)`);
      reverseLineGradient.addColorStop("1.0", `rgb(222, 22, 79)`);
      ctx.strokeStyle = reverseLineGradient;
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.moveTo(w - 1, 0);
      ctx.lineTo(w - 1, h);
      ctx.stroke();
    },
    // Sets height and width of app (which determines size of other items)
    // setAppHeightAndWidth() is inside garden.js
    resizeApp() {
      this.setAppHeightAndWidth(this.$refs.backgroundContainer);
    }
  },
  mounted() {
    // start simulation
    // this.createGarden();
    // Create and start garden
    // createGarden() is inside garden.js
    // start() is inside nodegarden.js
    this.createGarden("background", this.$refs.backgroundContainer);
    this.background.start();
    // this.nodeGarden.toggleNightMode(this.night);

    // trigger nightMode automatically
    // Night mode triggers automatically
    if (this.date.getHours() > 18 || this.date.getHours() < 6) {
      // this.nodeGarden.toggleNightMode();
      this.night = true;
      this.background.toggleNightMode(this.night);
    }
    this.createSubpageCanvas();
    // Listen for window size changes
    window.addEventListener('resize', () => {
      this.background.resize();
      this.resizeApp();
      this.createSubpageCanvas();
    });

    this.resizeApp();
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
  font-family: "Archivo", sans-serif;
  font-size: 100%;
}
*, ::before, ::after {
  box-sizing: border-box;
}

html {
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
  background-color: white;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;
}
  body.nightmode {
    background-color: black;
  }
  body.nightmode #mode-container {
    color: white;
  }
  body.nightmode #mode:hover {
    background-color: white;
    color: black;
  }

#app {
  height: 100%;
  width: 100%;
}

#page-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}

#background-container {
  // Height subtracts header section from top
  height: calc(100% - 75px);
  width: 100%;
  position: fixed;
  bottom: 0;
  overflow: hidden;
}

#header-section {
  height: 75px;
  width: 100%;
  @include flex-center;
  justify-content: space-between;
  position: relative;
}
  #mode-container {
    height: 75px;
    width: 75px;
    @include flex-center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 50;
  }
    #mode {
      height: 45px;
      width: 45px;
      @include flex-center;
      border-radius: 50%;
      transition: background-color 0.2s ease-in-out;
    }
    #mode:hover {
      background-color: black;
      color: white;
    }

#subpage-container {
  @include flex-center;
  // Height subtracts header section from top
  height: calc(100% - 75px);
  width: 80%;
  position: relative;
}
  // Prevent canvas from covering menu on homepage
  .subpage-container-index {
    z-index: -1;
  }
  #subpage {
    position: sticky;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
    // Add borders for day mode
    .subpage-day {
      border-left: 2px solid black;
      border-right: 2px solid black;
      background-color: rgba(white, 0.6);
    }
    #subpage::-webkit-scrollbar {
      width: 6px;
    }
    #subpage::-webkit-scrollbar-track {
      background: rgb(235, 235, 235); 
    }
    #subpage::-webkit-scrollbar-thumb {
      background: rgb(200, 200, 200); 
    }
    #subpage::-webkit-scrollbar-thumb:hover {
      background: rgb(175, 175, 175); 
    }
  // Change borders to transparent for sizing (night mode)
  body.nightmode .subpage-night {
    background-color: rgba(black, 0.6);
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
  }
    body.nightmode #subpage::-webkit-scrollbar-track {
      background: rgb(50, 50, 50); 
    }
    body.nightmode #subpage::-webkit-scrollbar-thumb {
      background: rgb(85, 85, 85);  
    }
    body.nightmode #subpage::-webkit-scrollbar-thumb:hover {
      background: rgb(110, 110, 110); 
    }
  #subpage-borders {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    // Prevent canvas from blocking scroll bar
    pointer-events: none;
  }

</style>
