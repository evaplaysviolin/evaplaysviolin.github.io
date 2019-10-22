<template>

<div id="app">

  <div id="page-container">

    <div id="node-garden-container" 
      ref="nodeGardenContainer" 
      @click.stop.prevent="gardenListener($event, $refs.nodeGardenContainer, 'nodeGarden', 'resetNode')">
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

    <router-view name="header" :night="night"></router-view>
    <div id="inner-page-container">
    <!-- Set up "views" for components -->
    <!-- Empty view is where main components for other pages is inserted -->
    <!-- Refer to route.js -->
    <!-- <router-view name="banner"></router-view> -->
      <router-view :night="night"></router-view>
    <!-- <router-view name="featured-partners"></router-view> -->
    </div>
  
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
    nightToggle() {
      // this.night = !this.night;
      this.night = !this.night;
      // this.nodeGarden.toggleNightMode();
      this.nodeGarden.toggleNightMode(this.night);
      this.resizeApp();
    },
    resizeApp() {
      this.setAppHeightAndWidth(this.$refs.nodeGardenContainer);
    }
  },
  mounted() {
    // start simulation
    // this.createGarden();
    this.createGarden("nodeGarden", this.$refs.nodeGardenContainer);
    this.nodeGarden.start();
    // this.nodeGarden.toggleNightMode(this.night);

    // trigger nightMode automatically
    if (this.date.getHours() > 18 || this.date.getHours() < 6) {
      // this.nodeGarden.toggleNightMode();
      this.night = true;
      this.nodeGarden.toggleNightMode(this.night);
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

#inner-page-container {
  @include flex-center;
  height: calc(100% - 75px);
  width: 100%;
}

</style>
