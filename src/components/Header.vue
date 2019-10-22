<template>

<div id="header-container" ref="headerContainer">
  <canvas id="header-border" ref="headerBorder" v-show="night"></canvas>
  <router-link :to="{ path: '/' }">home</router-link>
</div>

</template>



<script>

export default { 
  name: "Header",
  props: ["night"],
  data() {
    return {
    }
  },
  watch: {
    night () {
      this.test();
    }
  },
  methods: {
    test() {
      let canvas = this.$refs.headerBorder;
      let ctx = canvas.getContext("2d");
      let container = this.$refs.headerContainer;
      let measurements = container.getBoundingClientRect();
      // console.log(measurements.width);
      // console.log(measurements.height);
      canvas.width = measurements.width;
      // console.log(canvas.width);
      canvas.height = measurements.height;
      // console.log(canvas.height);
      let w = canvas.width;
      let h = canvas.height;
      let lineGradient = ctx.createLinearGradient(0, 0, w, 0);
      lineGradient.addColorStop("0", `rgb(222, 22, 79)`);
      lineGradient.addColorStop("0.5" , `rgb(42, 67, 232)`);
      lineGradient.addColorStop("1.0", `rgb(47, 189, 40)`);
      ctx.strokeStyle = lineGradient;
      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      ctx.lineWidth = "2";
      // ctx.translate(0.5, 0.5);
      // ctx.moveTo(0, h);
      // ctx.lineTo(w, h);
      ctx.moveTo(0, h - 1);
      ctx.lineTo(w, h - 1);
      // ctx.moveTo(0, h - 0.5);
      // ctx.lineTo(w, h - 0.5);
      // ctx.moveTo(0, h);
      // ctx.lineTo(w, h);
      ctx.stroke();
    }
  },
  mounted() {
    this.test();

    window.addEventListener("resize", () => {
      this.test();
    });
  }
}

</script>



<style scoped lang="scss">

#header-container {
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  @include flex-center;
  // border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  // background-color: rgba(0, 0, 0, 0.1);

  // // Fallback style for border-image
  // border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  // // border-style: solid;
  // border-image: linear-gradient(
  //   90deg, 
  //   $gradient-red, 
  //   $gradient-blue,
  //   $gradient-green
  //   ) 0 0 100% 0 / 2px;

  border-image: none;
  // border-bottom: 2px solid rgb(100, 100, 100);
  border-bottom: 2px solid black;
}
  body.nightmode #header-container {
    // border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    // background-color: rgba(255, 255, 255, 0.1);
    
    // border-image: none;
    // border-bottom: 2px solid white;

    // Fallback style for border-image
  // border-bottom: 2px solid white;
  border-bottom: 2px solid transparent;
  // border-style: solid;
  // border-image: linear-gradient(
  //   90deg, 
  //   $gradient-red, 
  //   $gradient-blue,
  //   $gradient-green
  //   ) 0 0 100% 0 / 2px;
  // border-bottom: none;
  }

  #header-border {
    // height: calc(100% + 2px);
    // height: 100%;
    // width: 100%;
    position: absolute;
    top: 0;
  }

  #header-container a {
    z-index: 75;
  }

</style>