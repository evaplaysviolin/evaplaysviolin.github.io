<template>

<div id="header-container" ref="headerContainer">
  <!-- Canvas with a gradient line pretending to be border-bottom for night mode -->
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
      this.createHeaderCanvas();
    }
  },
  methods: {
    createHeaderCanvas() {
      let canvas = this.$refs.headerBorder;
      let ctx = canvas.getContext("2d");
      let container = this.$refs.headerContainer;
      let measurements = container.getBoundingClientRect();
      canvas.width = measurements.width;
      canvas.height = measurements.height;
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
      // h - 1 to create a 2px line
      ctx.moveTo(0, h - 1);
      ctx.lineTo(w, h - 1);
      ctx.stroke();
    }
  },
  mounted() {
    this.createHeaderCanvas();

    window.addEventListener("resize", () => {
      this.createHeaderCanvas();
    });
  }
}

</script>



<style scoped lang="scss">

#header-container {
  @include flex-center;
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 2px solid black;
}
  body.nightmode #header-container {
    // Canvas "border" sits on top of this
    // Extra border used due to box-sizing: border-box
    border-bottom: 2px solid transparent;
  }

  #header-border {
    position: absolute;
    top: 0;
    // No pointer events for canvas that overlays everything
    pointer-events: none;
  }

</style>