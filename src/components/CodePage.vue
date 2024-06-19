<template>

<div id="code-container">
  <div id="examples-container" :style="detailsOpen ? pin : {}">
    <div class="example"
      v-for="(example, index) in examples" :key="example">
      <div class="large image-container" 
        :class="{ 'large-shadow': !detailsOpen }"
        @click="openDetails(index)">
        <div class="large-mouseover"
          @mouseover="exampleHover('over', index)"
          @mouseleave="exampleHover('leave', index)">
          <div class="mouseover-text"
            v-if="hover === index">
            {{ titles[index] }}
          </div>
        </div>
        <div class="fade" v-if="detailsOpen"></div>
        <img :src="image(example, 'large')" />
      </div>
    </div>
  </div>
  <div id="details-container">
    <div id="detail-wrapper" 
      v-for="(example, index) in examples" :key="`${example}-detail`">
      <div class="example-detail" v-if="current === index">
        <div class="detail-close" 
          :style="position"
          @click="closeDetails()">
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>
        <div class="content-wrapper">
          <div class="large-detail image-container"><img :src="image(example, 'large')" /></div>
          <div v-if="lessThan949" class="detail-text detail-text-small" v-html="descriptions[index]"></div>
          <div class="small-container">
            <div class="small image-container"><img :src="image(example, '1')" /></div>
            <div class="small image-container"><img :src="image(example, '2')" /></div>
            <div class="small image-container"><img :src="image(example, '3')" /></div>
          </div>
          <div v-if="!lessThan949" class="detail-text" v-html="descriptions[index]"></div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>



<script>

import { descriptions } from "../descriptions.js";
import media from "../mixins/media.js";
export default { 
  name: "CodePage",
  mixins: [media],
  data() {
    return {
      lessThan949: window.matchMedia("(max-width: 949px)").matches,
      descriptions: descriptions,
      examples: [
        "exhibitions",
        "portal",
        "books",
        "explore",
        "dynasties",
        "dxa",        
        "simon",
        // "ttt",
        "pomodoro",
        "calculator"
      ],
      titles: [
        "MWNF Exhibitions",
        "MWNF Portal",
        "MWNF Books",
        "Explore with MWNF",
        "DIA Dynasties",
        "Discover MWNF Galleries",
        "Simon Says",
        // "Tic Tac Toe",
        "Pomodoro Clock",
        "JavaScript Calculator"
      ],
      current: null,
      hover: null,
      detailsOpen: false,
      position: {
        top: 0,
        left: 0
      },
      pin: {
        position: "fixed",
        width: null,
        top: 0,
        left: 0,
      },
      initialTop: null,
    }
  },
  methods: {
    // Dynamic image URL
    image: function (name, type) {
      return require(`../assets/${name}_${type}.png`);
    },
    exampleHover: function(event, index) {
      if (event === "over") {
        this.hover = index;
      } else if (event === "leave") {
        this.hover = null;
      }
    },
    getInitialTop: function () {
      // Get top position and save it
      let element = document.getElementById("examples-container");
      let position = element.getBoundingClientRect();
      this.initialTop = `${position.top}px`;
    },
    setPin: function () {
      // Set coordinates for "pinning" the container in the background in place
      let examples = document.getElementById("code-container");
      let position = examples.getBoundingClientRect();
      this.pin.width = `${position.width}px`;
      this.pin.top = this.initialTop;
      this.pin.left = `${position.left}px`;
    },
    openDetails: function (index) {
      this.getInitialTop();
      // Open the appropriate details
      this.current = index;
      this.detailsOpen = true;
      // Wait for elements to load before setting positions
      this.$nextTick(function () {
        this.setPositions();
      });
    },
    closeDetails: function () {
      this.current = null;
      this.detailsOpen = false;
    },
    getPosition: function () {
      // Get size of close button
      let element = document.getElementsByClassName("detail-close")[0];
      let x = element.getBoundingClientRect();
      // Get size of container
      let container = document.getElementById("code-container");
      let position = container.getBoundingClientRect();
      // Calculate left position (subtract width of button)
      // Get right position but use as left value
      let left = position.right - x.width;
      // Set top and left
      this.position.top = `${position.top}px`;
      this.position.left = `${left}px`;
    },
    setPositions: function () {
      // Exit if detail window is closed
      if (!this.detailsOpen) {
        return;
      }
      this.setPin();
      this.getPosition();
    }
  },
  mounted() {
    // Responsive sizing
    window.addEventListener("resize", this.setPositions);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setPositions);
  }
}

</script>



<style scoped lang="scss">

// #about-container {
// }
  // body.nightmode #about-container {
  // }

#code-container {
  @include flex-center;
  position: relative;
  height: 100%;
  width: 100%;
  // padding: 50px;
  // margin: 50px;
}

#examples-container {
  align-self: flex-start;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  width: 100%;
  padding: 50px;
  // position: relative;
}
  .example {
    @include flex-center;
    flex-direction: column;
    height: 100%;
    width: 100%
    // position: relative;
    // margin-bottom: 50px;
  }
    .large {
      height: 100%;
      width: 100%;
      position: relative;
      // box-shadow: 0px 0px 10px 0px rgba(128, 128, 128, 0.5);
      // width: 60%;
      // margin-bottom: 10px;
    }
      .large img {
        object-fit: cover;
      }
      .large:hover {
        cursor: pointer;
      }
      .large-shadow {
        box-shadow: 0px 0px 10px 0px rgba(192, 192, 192, 0.5);
      }
      body.nightmode .large-shadow {
        box-shadow: 0px 0px 10px 0px rgba(64, 64, 64, 0.5);
      }
      .large-mouseover {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
        .mouseover-text {
          @include flex-center;
          height: 100%;
          width: 100%;
          color: white;
          font-size: 130%;
          font-weight: bold;
          text-align: center;
          text-shadow: 0 0 5px black;
          box-shadow: inset 0 0 0 200px rgba(black, 0.5);
          padding: 50px;
          // color: black;
          // box-shadow: inset 0 0 0 200px rgba(white, 0.5);
        }
          // body.nightmode .mouseover-text {
          //   // color: black;
          //   // box-shadow: inset 0 0 0 200px rgba(white, 0.5);
          //   color: white;
          //   box-shadow: inset 0 0 0 200px rgba(black, 0.5);
          // }
      .fade::after {
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 0 200px rgba(white, 0.85);
      }
      body.nightmode .fade::after {
        box-shadow: inset 0 0 0 200px rgba(black, 0.9);
      }

.example-detail {
  @include flex-center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // background-color: rgba(white, 0.8);
  padding: 50px;
  z-index: 5;
}
  .detail-close {
    position: fixed;
    // position: absolute;
    // top: 0;
    // right: 0;
    font-size: 28px;
    color: black;
    padding: 10px;
    // background-color: red;
  }
    .detail-close:hover {
      cursor: pointer;
    }
    body.nightmode .detail-close {
      color: white;
    }
  .content-wrapper {
    height: 100%;
    width: 60%;
  }
    .large-detail {
      width: 100%;
      box-shadow: 0px 0px 10px 0px rgba(192, 192, 192, 0.5);
      margin-bottom: 10px;
    }
      body.nightmode .large-detail {
        box-shadow: 0px 0px 10px 0px rgba(64, 64, 64, 0.5);
      }
    .small-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      width: 100%;
      margin-bottom: 20px;
    }
      .small {
        width: 100%;
        box-shadow: 0px 0px 10px 0px rgba(192, 192, 192, 0.5);
      }
        body.nightmode .small {
          box-shadow: 0px 0px 10px 0px rgba(64, 64, 64, 0.5);
        }
    .detail-text {
      @include font-default;
      width: 100%;
      color: black;
      background-color: rgba(white, 0.8);
      box-shadow: 0px 0px 10px 0px rgba(192, 192, 192, 0.5);
      // border-radius: 20px;
      padding: 20px;
    }
      body.nightmode .detail-text {
        color: white;
        background-color: rgba(black, 0.5);
        box-shadow: 0px 0px 10px 0px rgba(64, 64, 64, 0.5);
      }
      .detail-text::v-deep div {
        margin: 20px;
      }
      .detail-text::v-deep a {
        color: black;
      }
        body.nightmode .detail-text::v-deep a {
          color: white;
        }

.image-container img {
  @include image-scale;
}

@media only screen and (max-width: 1549px) {
  #examples-container {
    grid-template-columns: repeat(2, 1fr);
  }
    .content-wrapper {
      width: 80%;
    }
}

@media only screen and (max-width: 1099px) {
  #examples-container {
    grid-template-columns: repeat(1, 1fr);
  }
  .mouseover-text {
    box-shadow: inset 0 0 0 500px rgba(black, 0.5);
  }
  .fade::after {
    box-shadow: inset 0 0 0 500px rgba(white, 0.85);
  }
  body.nightmode .fade::after {
    box-shadow: inset 0 0 0 500px rgba(black, 0.9);
  }
    .content-wrapper {
      width: 100%;
    }
  .example-detail {
    padding: 50px 0;
  }
}

@media only screen and (max-width: 949px) {
  .detail-text {
    @include font-smaller;
  }
  .detail-text-small {
    margin-bottom: 20px;
  }
  .image-container {
    margin-bottom: 20px;
  }
  .small-container {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 749px) {
  #examples-container {
    padding: 50px 30px;
  }
  .detail-text::v-deep div {
    margin: 20px 0;
  }
  .example-detail {
    padding: 50px 30px;
  }
}

@media only screen and (max-width: 599px) {
  #examples-container {
    padding: 30px;
  }
  .detail-text::v-deep div {
    margin: 10px 0;
  }
}

</style>