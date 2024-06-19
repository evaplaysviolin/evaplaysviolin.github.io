<template>

<!-- Homepage menu -->
<div id="menu-container">
  <!-- Canvas for menu items (rectangles) -->
  <canvas id="menu" ref="menu"></canvas>

  <!-- Text label for menu item -->
  <div id="resume-label" class="menu-item">
    <div class="menu-label">resume</div>
    <!-- <router-link :to="{ path: '/resume' }"></router-link> -->
    <a href="./resume.pdf" target="_blank" draggable="false"></a>
  </div>
  <!-- Container for menu item's node garden -->
  <!-- <div id="menu-resume" ref="resumeGarden" class="menu-item"> -->
    <!-- Link to appropriate page -->
    <!-- <router-link :to="{ path: '/resume' }"></router-link>
  </div> -->
  
  <div id="about-label" class="menu-item">
    <div class="menu-label">about</div>
    <router-link :to="{ path: '/about' }" id="about-link" draggable="false"></router-link>
  </div>
  <!-- <div id="menu-about" ref="aboutGarden" class="menu-item">
    <router-link :to="{ path: '/about' }" id="about-link"></router-link>
  </div> -->

  <div id="code-label" class="menu-item">
    <div class="menu-label">code</div>
    <router-link :to="{ path: '/code' }" draggable="false"></router-link>
  </div>
  <!-- <div id="menu-code" ref="codeGarden" class="menu-item">
    <router-link :to="{ path: '/code' }"></router-link>
  </div> -->
  
  <div id="design-label" class="menu-item">
    <div class="menu-label">design</div>
    <router-link :to="{ path: '/design' }" draggable="false"></router-link>
  </div>
  <!-- <div id="menu-design" ref="designGarden" class="menu-item">
    <router-link :to="{ path: '/design' }"></router-link>
  </div> -->
  
  <div id="contact-label" class="menu-item">
    <div class="menu-label">contact</div>
    <router-link :to="{ path: '/contact' }" draggable="false"></router-link>
  </div>
  <!-- <div id="menu-contact" ref="contactGarden" class="menu-item">
    <router-link :to="{ path: '/contact' }"></router-link>
  </div> -->
</div>
   
</template>



<script>

// Storage for node garden container refs
// Used in for loop, below
// const menuItems = ["resumeGarden", "aboutGarden", "designGarden", "codeGarden", "contactGarden"];

import NodeGarden from '../vendors/nodegarden.js';
import garden from "../mixins/garden.js";
import media from "../mixins/media.js";
export default {
  name: "MenuPage",
  mixins: [garden, media],
  props: ["night"],
  data() {
    return {
      // Garden objects and node trackers
      // resumeGarden: {},
      //   resetResumeNode: 0,
      // aboutGarden: {},
      //   resetAboutNode: 0,
      // designGarden: {},
      //   resetDesignNode: 0,
      // codeGarden: {},
      //   resetCodeNode: 0,
      // contactGarden: {},
      //   resetContactNode: 0,
      lessThan899: window.matchMedia("(max-width: 899px)").matches,
    }
  },
  watch: {
    // "$route" (to, from) {
    //   this.resizeApp();
    // }
    // night () {
    //   this.resizeMenu();
    //   this.resumeGarden.toggleNightMode(this.night);
    //   this.aboutGarden.toggleNightMode(this.night);
    //   this.designGarden.toggleNightMode(this.night);
    //   this.codeGarden.toggleNightMode(this.night);
    //   this.contactGarden.toggleNightMode(this.night);
    // }
  },
  methods: {
    // Create and start gardens for menu items
    // createMenuGardens() {
    //   for (let i = 0; i < menuItems.length; i++) {
    //     this.createGarden(menuItems[i], this.$refs[menuItems[i]]);
    //     this[menuItems[i]].start();
    //   }
    // },
    // Set size of menu canvas according to app size
    // Draw menu item rectangles according to app size
    // resizeMenu() {
    //   this.setAppHeightAndWidth(this.$parent.$refs.backgroundContainer);

    //   this.$refs.menu.height = this.appHeight;
    //   this.$refs.menu.width = this.appWidth;

    //   let menuCanvas = this.$refs.menu;
    //   let menuCtx = menuCanvas.getContext("2d");
    //   menuCtx.clearRect(0, 0, menuCanvas.width, menuCanvas.height);
    //   menuCtx.beginPath();
    //   let scw = menuCanvas.width;
    //   let sch = menuCanvas.height;

    //   // Create gradient for night mode
    //   if (this.night) {
    //     menuCtx.fillStyle = "#000";
    //     let lineGradient = menuCtx.createLinearGradient(0, 0, scw, 0);
    //     lineGradient.addColorStop("0", `rgb(222, 22, 79)`);
    //     lineGradient.addColorStop("0.5" , `rgb(42, 67, 232)`);
    //     lineGradient.addColorStop("1.0", `rgb(47, 189, 40)`);
    //     menuCtx.strokeStyle = lineGradient;
    //   } else {
    //     menuCtx.fillStyle = "#FFF";
    //     menuCtx.strokeStyle = "#000";
    //   }

    //   // Place rectangles on canvas
    //   // Fill with background color depending on day/night mode (to cover background canvas)
    //   // Calculated percentages (the + numbers are for "margins" between rectangles)
    //   // Resume
    //   menuCtx.fillRect((scw * 0.19), (sch * 0.25), (scw * 0.3), (sch * 0.08));
    //   // About
    //   menuCtx.fillRect((scw * 0.49 + 10), (sch * 0.05), (scw * 0.15), (sch * 0.28));
    //   // Design
    //   menuCtx.fillRect((scw * 0.29), (sch * 0.33 + 10), (scw * 0.12), (sch * 0.38));
    //   // Code
    //   menuCtx.fillRect((scw * 0.41 + 10), (sch * 0.33 + 10), (scw * 0.18), (sch * 0.6));
    //   // Contact
    //   menuCtx.fillRect((scw * 0.59 + 20), (sch * 0.33 + 10), (scw * 0.22), (sch * 0.3));

    //   // Draw an outline for each rectangle
    //   // Resume
    //   menuCtx.beginPath();
    //   menuCtx.lineWidth = "2";
    //   menuCtx.rect((scw * 0.19), (sch * 0.25), (scw * 0.3), (sch * 0.08));
    //   menuCtx.stroke();
    //   // About
    //   menuCtx.beginPath();
    //   menuCtx.lineWidth = "2";
    //   menuCtx.rect((scw * 0.49 + 10), (sch * 0.05), (scw * 0.15), (sch * 0.28));
    //   menuCtx.stroke();
    //   // Design
    //   menuCtx.beginPath();
    //   menuCtx.lineWidth = "2";
    //   menuCtx.rect((scw * 0.29), (sch * 0.33 + 10), (scw * 0.12), (sch * 0.38));
    //   menuCtx.stroke();
    //   // Code
    //   menuCtx.beginPath();
    //   menuCtx.lineWidth = "2";
    //   menuCtx.rect((scw * 0.41 + 10), (sch * 0.33 + 10), (scw * 0.18), (sch * 0.6));
    //   menuCtx.stroke();
    //   // Contact
    //   menuCtx.beginPath();
    //   menuCtx.lineWidth = "2";
    //   menuCtx.rect((scw * 0.59 + 20), (sch * 0.33 + 10), (scw * 0.22), (sch * 0.3));
    //   menuCtx.stroke();
    // }
  },
  mounted() {
    // window.addEventListener('resize', () => {
      // Re-calculates number of nodes
      // .resize() located in nodegarden.js
      // this.resumeGarden.resize();
      // this.aboutGarden.resize();
      // this.designGarden.resize();
      // this.codeGarden.resize();
      // this.contactGarden.resize();
      // Re-calculate menu items
    //   this.resizeMenu();
    // });

    // this.resizeMenu();

    // this.createMenuGardens();

    // Do initial check for night mode
    // this.resumeGarden.toggleNightMode(this.night);
    // this.aboutGarden.toggleNightMode(this.night);
    // this.designGarden.toggleNightMode(this.night);
    // this.codeGarden.toggleNightMode(this.night);
    // this.contactGarden.toggleNightMode(this.night);
  }
}

</script>



<style lang="scss">

#menu {
  position: fixed;
  overflow: hidden;
}

.menu-label {
  // position: absolute;
  color: black;
  font-size: 250%;
  padding: 10px 20px;
  user-select: none;
}
  body.nightmode .menu-label {
    color: white;
  }
.menu-item {
  // position: absolute;
  background: rgba(white, 0.5);
  border: 2px solid black;
  border-radius: 5px;
  // overflow: hidden;
}
  body.nightmode .menu-item {
    // border: 2px solid white;
    // background-clip: padding-box;
    border: 2px;
    color: white;
    background: rgba(black, 0.5);
    background-clip: padding-box;
    border: solid 2px transparent;
    border-radius: 5px;
  }
    body.nightmode .menu-item:before {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: -1;
      margin: -2px;
      border-radius: inherit;
      // background: linear-gradient(to right, red, orange);
      background: linear-gradient(160deg, 
        rgba(222, 22, 79, 0.2) 0%, 
        rgba(42, 67, 232, 0.2) 50%, 
        rgba(47, 189, 40, 0.2) 100%);
    }
  .menu-item a {
    height: 100%;
    width: 100%;
    position: absolute;
  }
    .menu-item a:hover {
      // Same linear gradient as used in canvases
      background: linear-gradient(160deg, 
        rgba(222, 22, 79, 0.2) 0%, 
        rgba(42, 67, 232, 0.2) 50%, 
        rgba(47, 189, 40, 0.2) 100%);
    }
    body.nightmode .menu-item a:hover {
      background: none;
      background-color: rgba(255, 255, 255, 0.1);
    }

  .menu-label,
  .menu-item,
  #resume-label,
  #about-label,
  #design-label,
  #code-label,
  #contact-label {
    @include flex-center;
    position: relative;
    height: initial;
    width: 75%;
    max-width: 1150px;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
  }
    .menu-item a {
      top: 0;
      left: 0;
    }
    #about-label .menu-label,
    #design-label .menu-label {
      transform: none;
    }
  #menu-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    height: 100%;
    width: 100%;
    margin-top: 30px;
  }
    .menu-item {
      margin: 20px 50px;
    }
    .menu-label {
      text-align: center;
    }

  // Placement of labels within rectangles
  // #resume-label,
  // #menu-resume {
  //   height: calc((100vh - 75px) * 0.08);
  //   width: 30%;
  //   top: 25%;
  //   left: 19%;
  // }
  //   #resume-label .menu-label {
  //     bottom: 0;
  //   }
  // #about-label,
  // #menu-about {
  //   height: calc((100vh - 75px) * 0.28);
  //   width: 15%;
  //   top: 5%;
  //   left: calc(49% + 10px);
  // }
  //   #about-label .menu-label {
  //     right: 0;
  //     transform: rotate(90deg) translate(100%, 0);
  //     transform-origin: top right;
  //   }
  // #design-label,
  // #menu-design {
  //   height: calc((100vh - 75px) * 0.38);
  //   width: 12%;
  //   top: calc(33% + 10px);
  //   left: 29%;
  // }
  //   #design-label .menu-label {
  //     bottom: 0;
  //     transform: rotate(-90deg) translate(0, 100%);
  //     transform-origin: bottom left;
  //   }
  // #code-label,
  // #menu-code {
  //   height: calc((100vh - 75px) * 0.6);
  //   width: 18%;
  //   top: calc(33% + 10px);
  //   left: calc(41% + 10px);
  // }
  //   #code-label .menu-label {
  //     right: 0;
  //   }
  // #contact-label,
  // #menu-contact {
  //   height: calc((100vh - 75px) * 0.3);
  //   width: 22%;
  //   top: calc(33% + 10px);
  //   left: calc(59% + 20px);
  // }
  //   #contact-label .menu-label {
  //     right: 0;
  //     bottom: 0;
  //   }

@media only screen and (max-width: 899px), (max-height: 899px) {
  .menu-label,
  .menu-item,
  #resume-label,
  #about-label,
  #design-label,
  #code-label,
  #contact-label {
    position: relative;
    height: initial;
    width: 85%;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
  }
    .menu-item a {
      top: 0;
      left: 0;
    }
    #about-label .menu-label,
    #design-label .menu-label {
      transform: none;
    }
  #menu-container {
    position: absolute;
    width: 100%;
    margin-top: 30px;
  }
    .menu-item {
      margin: 20px 50px;
    }
    .menu-label {
      text-align: center;
    }
}

@media only screen and (max-height: 549px) {
  #menu-container {
    margin-top: 15px;
  }
    .menu-item {
      margin: 10px 50px;
    }
    .menu-label {
      font-size: 150%;
    }
}

</style>
