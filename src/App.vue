<template>

<div id="app">

  <div id="page-container">

    <div id="node-garden-container" 
      ref="nodeGardenContainer" 
      @click.stop.prevent="gardenListener($event, $refs.nodeGardenContainer, 'nodeGarden', 'resetNode')">
      <!-- move these out into own shit -->
      <!-- <canvas id="menu" ref="menu" v-show="$route.path === '/'"></canvas>
      <div id="menu-resume"></div>
      <div id="menu-about"></div>
      <div id="menu-design"></div>
      <div id="menu-code"></div>
      <div id="menu-contact"></div> -->
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

    <!-- <div id="menu-container"> -->
      <!-- <div id="menu-resume"></div>
      <div id="menu-about"></div>
      <div id="menu-design"></div>
      <div id="menu-code"></div>
      <div id="menu-contact"></div> -->
    <!-- </div> -->

    <!-- Set up "views" for components -->
    <!-- Empty view is where main components for other pages is inserted -->
    <!-- Refer to route.js -->
    <!-- <router-view name="banner"></router-view>
    <router-view name="navigation"></router-view>
    <router-view name="sub-banner"></router-view> -->
    <router-view name="header"></router-view>
    <router-view></router-view>
    <!-- <router-view name="featured-partners"></router-view>
    <router-view name="featured-galleries"></router-view> -->
  
  </div>

</div>

</template>



<script>

import NodeGarden from './vendors/nodegarden.js';
import Menu from "./components/Menu.vue";
import garden from "./mixins/garden.js";
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
      nodeGarden: {},
      // date: new Date(),
      resetNode: 0,
      night: false,
      // appHeight: null,
      // appWidth: null,
    }
  },
  watch: {
    "$route" (to, from) {
      this.resizeApp();
    }
  },
  methods: {
    // createGarden() {
    //   this.nodeGarden = new NodeGarden(this.$refs.nodeGardenContainer);
    // },
    // gardenListener(e) {
    //   const bcr = this.$refs.nodeGardenContainer.getBoundingClientRect();
    //   const scrollPos = {
    //     x: window.scrollX,
    //     y: window.scrollY
    //   };
    //   this.resetNode++;
    //   if (this.resetNode > this.nodeGarden.nodes.length - 1) {
    //     this.resetNode = 1;
    //   }
    //   this.nodeGarden.nodes[this.resetNode].reset({
    //     x: (e.pageX - scrollPos.x - bcr.left) * this.pixelRatio,
    //     y: (e.pageY - scrollPos.y - bcr.top) * this.pixelRatio,
    //     vx: 0,
    //     vy: 0
    //   });
    // },
    nightToggle() {
      this.nodeGarden.toggleNightMode();
      this.night = !this.night;
      this.resizeApp();
    },
    // setAppHeightAndWidth() {
    //   this.appHeight = this.$refs.nodeGardenContainer.clientHeight;
    //   this.appWidth = this.$refs.nodeGardenContainer.clientWidth;
    // },
    resizeApp() {
      this.setAppHeightAndWidth(this.$refs.nodeGardenContainer);

      // if (this.$route.path === "/") {
      //   this.$refs.menu.height = this.appHeight;
      //   this.$refs.menu.width = this.appWidth;

      //   let menuCanvas = this.$refs.menu;
      //   let menuCtx = menuCanvas.getContext("2d");
      //   menuCtx.clearRect(0, 0, menuCanvas.width, menuCanvas.height);
      //   menuCtx.beginPath();
      //   let scw = menuCanvas.width;
      //   let sch = menuCanvas.height;

      //   if (this.night) {
      //     menuCtx.fillStyle = "#000";
      //     menuCtx.strokeStyle = 'rgb(200,200,200)';
      //   } else {
      //     menuCtx.fillStyle = "#FFF";
      //     let lineGradient = menuCtx.createLinearGradient(0, 0, scw, 0);
      //     lineGradient.addColorStop("0", `rgb(222, 22, 79)`);
      //     lineGradient.addColorStop("0.5" , `rgb(42, 67, 232)`);
      //     lineGradient.addColorStop("1.0", `rgb(47, 189, 40)`);
      //     menuCtx.strokeStyle = lineGradient;
      //   }

      //   menuCtx.fillRect((scw * 0.19), (sch * 0.25), (scw * 0.3), (sch * 0.08));
      //   menuCtx.fillRect((scw * 0.49 + 10), (sch * 0.05), (scw * 0.15), (sch * 0.28));
      //   menuCtx.fillRect((scw * 0.29), (sch * 0.33 + 10), (scw * 0.12), (sch * 0.38));
      //   menuCtx.fillRect((scw * 0.41 + 10), (sch * 0.33 + 10), (scw * 0.18), (sch * 0.6));
      //   menuCtx.fillRect((scw * 0.59 + 20), (sch * 0.33 + 10), (scw * 0.22), (sch * 0.3));

      //   menuCtx.beginPath();
      //   menuCtx.lineWidth = "1";
      //   menuCtx.rect((scw * 0.19), (sch * 0.25), (scw * 0.3), (sch * 0.08));
      //   menuCtx.stroke();

      //   menuCtx.beginPath();
      //   menuCtx.lineWidth = "1";
      //   menuCtx.rect((scw * 0.49 + 10), (sch * 0.05), (scw * 0.15), (sch * 0.28));
      //   menuCtx.stroke();

      //   menuCtx.beginPath();
      //   menuCtx.lineWidth = "1";
      //   menuCtx.rect((scw * 0.29), (sch * 0.33 + 10), (scw * 0.12), (sch * 0.38));
      //   menuCtx.stroke();

      //   menuCtx.beginPath();
      //   menuCtx.lineWidth = "1";
      //   menuCtx.rect((scw * 0.41 + 10), (sch * 0.33 + 10), (scw * 0.18), (sch * 0.6));
      //   menuCtx.stroke();

      //   menuCtx.beginPath();
      //   menuCtx.lineWidth = "1";
      //   menuCtx.rect((scw * 0.59 + 20), (sch * 0.33 + 10), (scw * 0.22), (sch * 0.3));
      //   menuCtx.stroke();
      // }
    }
  },
  mounted() {

    // start simulation
    // this.createGarden();
    this.createGarden("nodeGarden", this.$refs.nodeGardenContainer);
    this.nodeGarden.start();

    // trigger nightMode automatically
    if (this.date.getHours() > 18 || this.date.getHours() < 6) {
      this.nodeGarden.toggleNightMode();
      this.night = true;
    }

    window.addEventListener('resize', () => {
      this.nodeGarden.resize();
      this.resizeApp();
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
  // body.nightmode #mode-container:hover {
  //   background-color: white;
  //   color: #000;
  // }
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

#node-garden-container {
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
    // #mode-container:hover {
    //   background-color: black;
    //   color: white;
    // }
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

</style>
