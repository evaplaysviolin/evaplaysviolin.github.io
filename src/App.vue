<template>

<div id="app">

  <div id="page-container">

    <div id="node-garden-container" ref="nodeGardenContainer" @click="gardenListener($event)">
      <canvas id="spaces" ref="spaces"></canvas>
    </div>

    <div id="header-container">
      <div id="mode-container" @click="nightToggle()">
        <font-awesome-icon :icon="['fas', 'moon']" v-if="!night" />
        <font-awesome-icon :icon="['fas', 'sun']" v-else />
      </div>
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
      pixelRatio: window.devicePixelRatio,
      nodeGarden: {},
      date: new Date(),
      resetNode: 0,
      night: false,
      appHeight: null,
      appWidth: null,
    }
  },
  watch: {
    "$route" (to, from) {
    }
  },
  methods: {
    createGarden() {
      this.nodeGarden = new NodeGarden(this.$refs.nodeGardenContainer);
    },
    gardenListener(e) {
      const bcr = this.$refs.nodeGardenContainer.getBoundingClientRect();
      const scrollPos = {
        x: window.scrollX,
        y: window.scrollY
      };
      this.resetNode++;
      if (this.resetNode > this.nodeGarden.nodes.length - 1) {
        this.resetNode = 1;
      }
      this.nodeGarden.nodes[this.resetNode].reset({
        x: (e.pageX - scrollPos.x - bcr.left) * this.pixelRatio,
        y: (e.pageY - scrollPos.y - bcr.top) * this.pixelRatio,
        vx: 0,
        vy: 0
      });
    },
    nightToggle() {
      this.nodeGarden.toggleNightMode();
      this.night = !this.night;
    },
    setAppHeightAndWidth() {
      this.appHeight = this.$refs.nodeGardenContainer.clientHeight;
      this.appWidth = this.$refs.nodeGardenContainer.clientWidth;
    },
    resizeSpaces() {
      this.setAppHeightAndWidth();
      this.$refs.spaces.height = this.appHeight;
      this.$refs.spaces.width = this.appWidth;

      let spacesCanvas = this.$refs.spaces;
      let spacesCtx = spacesCanvas.getContext("2d");
      spacesCtx.clearRect(0, 0, spacesCanvas.width, spacesCanvas.height);
      spacesCtx.beginPath();
      spacesCtx.rect((spacesCanvas.width * 0.20) , (spacesCanvas.height * 0.25), 200, 200);
      spacesCtx.fillStyle = "#000000";
      spacesCtx.fill();
    }
  },
  mounted() {

    // start simulation
    this.createGarden();
    this.nodeGarden.start();

    // trigger nightMode automatically
    if (this.date.getHours() > 18 || this.date.getHours() < 6) {
      this.nodeGarden.toggleNightMode();
      this.night = true;
    }

    window.addEventListener('resize', () => {
      this.nodeGarden.resize();
      this.resizeSpaces();
    });

    this.resizeSpaces();

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
  body.nightmode #mode-container:hover {
    background-color: white;
    color: #000;
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
  #spaces {
    position: fixed;
    overflow: hidden;
  }

#header-container {
  height: 75px;
  width: 100%;
  @include flex-center;
  justify-content: space-between;
  position: relative;
}
  #mode-container {
    height: 75px;
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    z-index: 50;
  }
    #mode-container:hover {
      background-color: black;
      color: white;
    }

</style>
