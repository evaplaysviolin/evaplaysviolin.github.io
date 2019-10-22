<template>

<div id="menu-container">
  <!-- <canvas id="menu" ref="menu" v-show="$route.path === '/'"></canvas> -->
  <canvas id="menu" ref="menu"></canvas>

  <div id="resume-label" class="menu-item">
    <!-- <router-link :to="{ path: '/resume' }"></router-link> -->
    <div class="menu-label">resume</div>
  </div>
  <!-- <div id="menu-resume" ref="resumeGarden" class="menu-item" @click.stop.prevent="gardenListener($event, $refs.resumeGarden, 'resumeGarden', 'resetResumeNode')"></div> -->
  <div id="menu-resume" ref="resumeGarden" class="menu-item">
    <router-link :to="{ path: '/resume' }"></router-link>
  </div>
  
  <div id="about-label" class="menu-item">
    <!-- <router-link :to="{ path: '/about' }" id="about-link"></router-link> -->
    <div class="menu-label">about</div>
  </div>
  <!-- <div id="menu-about" ref="aboutGarden" class="menu-item" @click.stop.prevent="gardenListener($event, $refs.aboutGarden, 'aboutGarden', 'resetAboutNode')"></div> -->
  <div id="menu-about" ref="aboutGarden" class="menu-item">
    <router-link :to="{ path: '/about' }" id="about-link"></router-link>
  </div>
  
  <div id="design-label" class="menu-item">
    <!-- <router-link :to="{ path: '/design' }"></router-link> -->
    <div class="menu-label">design</div>
  </div>
  <!-- <div id="menu-design" ref="designGarden" class="menu-item" @click.stop.prevent="gardenListener($event, $refs.designGarden, 'designGarden', 'resetDesignNode')"></div> -->
  <div id="menu-design" ref="designGarden" class="menu-item">
    <router-link :to="{ path: '/design' }"></router-link>
  </div>
  
  <div id="code-label" class="menu-item">
    <!-- <router-link :to="{ path: '/code' }"></router-link> -->
    <div class="menu-label">code</div>
  </div>
  <!-- <div id="menu-code" ref="codeGarden" class="menu-item" @click.stop.prevent="gardenListener($event, $refs.codeGarden, 'codeGarden', 'resetCodeNode')"></div> -->
  <div id="menu-code" ref="codeGarden" class="menu-item">
    <router-link :to="{ path: '/code' }"></router-link>
  </div>
  
  <div id="contact-label" class="menu-item">
    <!-- <router-link :to="{ path: '/contact' }"></router-link> -->
    <div class="menu-label">contact</div>
  </div>
  <!-- <div id="menu-contact" ref="contactGarden" class="menu-item" @click.stop.prevent="gardenListener($event, $refs.contactGarden, 'contactGarden', 'resetContactNode')"></div> -->
  <div id="menu-contact" ref="contactGarden" class="menu-item">
    <router-link :to="{ path: '/contact' }"></router-link>
  </div>
</div>
   
</template>



<script>

const menuItems = ["resumeGarden", "aboutGarden", "designGarden", "codeGarden", "contactGarden"];

import NodeGarden from '../vendors/nodegarden.js';

import garden from "../mixins/garden.js";
// import media from "./mixins/media.js";
export default {
  name: "Menu",
  // mixins: [media],
  mixins: [garden],
  props: ["night"],
  data() {
    return {
      // pixelRatio: window.devicePixelRatio,
      // nodeGarden: {},
      // date: new Date(),
      // resetNode: 0,
      // night: false,
      // appHeight: null,
      // appWidth: null,
      resumeGarden: {},
        resetResumeNode: 0,
      aboutGarden: {},
        resetAboutNode: 0,
      designGarden: {},
        resetDesignNode: 0,
      codeGarden: {},
        resetCodeNode: 0,
      contactGarden: {},
        resetContactNode: 0,
    }
  },
  watch: {
    // "$route" (to, from) {
    //   this.resizeApp();
    // }
    night () {
      // console.log("watcher");
      this.resizeMenu();
      // this.toggleColors();
      // this.resumeGarden.toggleNightMode();
      // this.aboutGarden.toggleNightMode();
      // this.designGarden.toggleNightMode();
      // this.codeGarden.toggleNightMode();
      // this.contactGarden.toggleNightMode();
      this.resumeGarden.toggleNightMode(this.night);
      this.aboutGarden.toggleNightMode(this.night);
      this.designGarden.toggleNightMode(this.night);
      this.codeGarden.toggleNightMode(this.night);
      this.contactGarden.toggleNightMode(this.night);
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
    //
    //
    //
    //need pass ref to nodegardencontainer?
    // setAppHeightAndWidth() {
    //   this.appHeight = this.$refs.nodeGardenContainer.clientHeight;
    //   this.appWidth = this.$refs.nodeGardenContainer.clientWidth;
    // },
    // toggleColors() {
    //   for (let i = 0; i < menuItems.length; i++) {
    //     let ctx = this.$refs[menuItems[i]].children[0].getContext("2d");
    //     if (this.night) {
    //       console.log(this.night);
    //       ctx.fillStyle = "#000";
    //       ctx.strokeStyle = 'rgb(200,200,200)';
    //     } else {
    //       console.log(this.night);
    //       ctx.fillStyle = "#FFF";
    //       let lineGradient = ctx.createLinearGradient(0, 0, this.$refs[menuItems[i]].children[0].width, 0);
    //       lineGradient.addColorStop("0", `rgb(222, 22, 79)`);
    //       lineGradient.addColorStop("0.5" , `rgb(42, 67, 232)`);
    //       lineGradient.addColorStop("1.0", `rgb(47, 189, 40)`);
    //       ctx.strokeStyle = lineGradient;
    //     }
    //   }
    // },
    createMenuGardens() {
      for (let i = 0; i < menuItems.length; i++) {
        // console.log(i);
        this.createGarden(menuItems[i], this.$refs[menuItems[i]]);
        this[menuItems[i]].start();
      }
      // this.toggleColors();
    },
    resizeMenu() {
      this.setAppHeightAndWidth(this.$parent.$refs.nodeGardenContainer);

      // if (this.$route.path === "/") {
        this.$refs.menu.height = this.appHeight;
        this.$refs.menu.width = this.appWidth;

        let menuCanvas = this.$refs.menu;
        let menuCtx = menuCanvas.getContext("2d");
        menuCtx.clearRect(0, 0, menuCanvas.width, menuCanvas.height);
        menuCtx.beginPath();
        let scw = menuCanvas.width;
        let sch = menuCanvas.height;

        // if (this.night) {
        //   menuCtx.fillStyle = "#000";
        //   menuCtx.strokeStyle = 'rgb(200,200,200)';
        // } else {
        //   menuCtx.fillStyle = "#FFF";
        //   let lineGradient = menuCtx.createLinearGradient(0, 0, scw, 0);
        //   lineGradient.addColorStop("0", `rgb(222, 22, 79)`);
        //   lineGradient.addColorStop("0.5" , `rgb(42, 67, 232)`);
        //   lineGradient.addColorStop("1.0", `rgb(47, 189, 40)`);
        //   menuCtx.strokeStyle = lineGradient;
        // }

        if (this.night) {
          menuCtx.fillStyle = "#000";
          let lineGradient = menuCtx.createLinearGradient(0, 0, scw, 0);
          lineGradient.addColorStop("0", `rgb(222, 22, 79)`);
          lineGradient.addColorStop("0.5" , `rgb(42, 67, 232)`);
          lineGradient.addColorStop("1.0", `rgb(47, 189, 40)`);
          menuCtx.strokeStyle = lineGradient;
        } else {
          menuCtx.fillStyle = "#FFF";
          // menuCtx.strokeStyle = "rgb(100, 100, 100)";
          menuCtx.strokeStyle = "#000";
        }

        menuCtx.fillRect((scw * 0.19), (sch * 0.25), (scw * 0.3), (sch * 0.08));
        menuCtx.fillRect((scw * 0.49 + 10), (sch * 0.05), (scw * 0.15), (sch * 0.28));
        menuCtx.fillRect((scw * 0.29), (sch * 0.33 + 10), (scw * 0.12), (sch * 0.38));
        menuCtx.fillRect((scw * 0.41 + 10), (sch * 0.33 + 10), (scw * 0.18), (sch * 0.6));
        menuCtx.fillRect((scw * 0.59 + 20), (sch * 0.33 + 10), (scw * 0.22), (sch * 0.3));

        menuCtx.beginPath();
        menuCtx.lineWidth = "2";
        menuCtx.rect((scw * 0.19), (sch * 0.25), (scw * 0.3), (sch * 0.08));
        menuCtx.stroke();

        menuCtx.beginPath();
        menuCtx.lineWidth = "2";
        menuCtx.rect((scw * 0.49 + 10), (sch * 0.05), (scw * 0.15), (sch * 0.28));
        menuCtx.stroke();

        menuCtx.beginPath();
        menuCtx.lineWidth = "2";
        menuCtx.rect((scw * 0.29), (sch * 0.33 + 10), (scw * 0.12), (sch * 0.38));
        menuCtx.stroke();

        menuCtx.beginPath();
        menuCtx.lineWidth = "2";
        menuCtx.rect((scw * 0.41 + 10), (sch * 0.33 + 10), (scw * 0.18), (sch * 0.6));
        menuCtx.stroke();

        menuCtx.beginPath();
        menuCtx.lineWidth = "2";
        menuCtx.rect((scw * 0.59 + 20), (sch * 0.33 + 10), (scw * 0.22), (sch * 0.3));
        menuCtx.stroke();
      // }
    }
  },
  mounted() {

    window.addEventListener('resize', () => {
      this.resumeGarden.resize();
      this.aboutGarden.resize();
      this.designGarden.resize();
      this.codeGarden.resize();
      this.contactGarden.resize();
      this.resizeMenu();
    });

    this.resizeMenu();

    this.createMenuGardens();
    // this.createGarden("resumeGarden", this.$refs.resumeGarden);
    // this.resumeGarden.start();
    // this.createGarden("aboutGarden", this.$refs.aboutGarden);
    // this.aboutGarden.start();
    // this.createGarden("designGarden", this.$refs.designGarden);
    // this.designGarden.start();
    // this.createGarden("codeGarden", this.$refs.codeGarden);
    // this.codeGarden.start();
    // this.createGarden("contactGarden", this.$refs.contactGarden);
    // this.contactGarden.start();
    this.resumeGarden.toggleNightMode(this.night);
    this.aboutGarden.toggleNightMode(this.night);
    this.designGarden.toggleNightMode(this.night);
    this.codeGarden.toggleNightMode(this.night);
    this.contactGarden.toggleNightMode(this.night);
  },
  // updated() {
    // this.$nextTick(function() {
    //   this.resumeGarden.toggleNightMode(this.night);
    //   this.aboutGarden.toggleNightMode(this.night);
    //   this.designGarden.toggleNightMode(this.night);
    //   this.codeGarden.toggleNightMode(this.night);
    //   this.contactGarden.toggleNightMode(this.night);
    // });
    // this.resumeGarden.toggleNightMode(this.night);
    // this.aboutGarden.toggleNightMode(this.night);
    // this.designGarden.toggleNightMode(this.night);
    // this.codeGarden.toggleNightMode(this.night);
    // this.contactGarden.toggleNightMode(this.night);
  // }
}

</script>



<style lang="scss">


  #menu {
    position: fixed;
    overflow: hidden;
  }

  
  // #menu-container {
  //   height: calc(100% - 75px);
  //   width: 100%;
  //   position: relative;
  //   // background-color: rgba(0,0,0,0.1);
  // }

  .menu-label {
    position: absolute;
    color: black;
    font-size: 250%;
    padding: 4px 8px;
    user-select: none;
    // z-index: 110;
  }
    body.nightmode .menu-label {
      color: white;
    }
  .menu-item {
    position: absolute;
  }
    .menu-item a {
      height: 100%;
      width: 100%;
      position: absolute;
      // z-index: 100;
    }
      .menu-item a:hover {
        // height: calc(100% - 2px);
        // width: calc(100% - 2px);
        // top: 1px;
        // right: 1px;
        // background-color: rgba(0, 0, 0, 0.1);
        background: linear-gradient(160deg, rgba(222,22,79,0.2) 0%, rgba(42,67,232,0.2) 50%, rgba(47,189,40,0.2) 100%);
      }
      body.nightmode .menu-item a:hover {
        background: none;
        background-color: rgba(255, 255, 255, 0.1);
      }

    #resume-label,
    #menu-resume {
      // height: 8%;
      height: calc((100vh - 75px) * 0.08);
      width: 30%;
      // background-color: rgba(0,0,0,0.1);
      top: 25%;
      // top: calc((100vh - 75px) * 0.25);
      left: 19%;
    }
      #resume-label .menu-label {
        bottom: 0;
      }
    #about-label,
    #menu-about {
      // height: 28%;
      height: calc((100vh - 75px) * 0.28);
      width: 15%;
      // background-color: rgba(0,0,0,0.1);
      top: 5%;
      // top: calc((100vh - 75px) * 0.05);
      left: calc(49% + 10px);
    }
      // #about-label a {
      //   // display: inline-block;
      //   height: 100%;
      //   width: 100%;
      //   position: absolute;
      //   z-index: 100;
      // }
      #about-label .menu-label {
        right: 0;
        transform: rotate(90deg) translate(100%, 0);
        transform-origin: top right;
      }
    #design-label,
    #menu-design {
      // height: 38%;
      height: calc((100vh - 75px) * 0.38);
      width: 12%;
      // background-color: rgba(0,0,0,0.1);
      top: calc(33% + 10px);
      // top: calc(((100vh - 75px) * 0.33) + 10px);
      left: 29%;
    }
      #design-label .menu-label {
        bottom: 0;
        transform: rotate(-90deg) translate(0, 100%);
        transform-origin: bottom left;
      }
    #code-label,
    #menu-code {
      // height: 60%;
      height: calc((100vh - 75px) * 0.6);
      width: 18%;
      // background-color: rgba(0,0,0,0.1);
      top: calc(33% + 10px);
      // top: calc(((100vh - 75px) * 0.33) + 10px);
      left: calc(41% + 10px);
    }
      #code-label .menu-label {
        right: 0;
      }
    #contact-label,
    #menu-contact {
      // height: 30%;
      height: calc((100vh - 75px) * 0.3);
      width: 22%;
      // background-color: rgba(0,0,0,0.1);
      top: calc(33% + 10px);
      // top: calc(((100vh - 75px) * 0.33) + 10px);
      left: calc(59% + 20px);
    }
      #contact-label .menu-label {
        right: 0;
        bottom: 0;
      }

</style>
