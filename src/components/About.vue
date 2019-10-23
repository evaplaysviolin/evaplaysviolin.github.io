<template>

<div id="about-container">
  <!-- <canvas id="inner-page-borders" ref="innerPageBorders" v-show="night"></canvas> -->
  <div id="about" ref="about">
    <canvas id="inner-page-borders" ref="innerPageBorders" v-show="night"></canvas>
    <div id="about-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem at nisi feugiat luctus. Quisque mollis elit lorem, facilisis vehicula leo rutrum non. Quisque ullamcorper pharetra orci, quis venenatis magna dictum sed. In pharetra orci eros, sit amet fringilla dui interdum id. Proin feugiat diam id iaculis pretium. Morbi ac ex eu turpis tincidunt bibendum ullamcorper ut nibh. Nunc vitae consequat massa. Suspendisse vitae est nec mi maximus maximus. Vivamus pretium, orci vitae tristique aliquam, sapien nisl efficitur orci, et ullamcorper sapien mauris id justo. Nulla pulvinar porta nulla sed feugiat. Pellentesque mollis et leo eget viverra. Nunc interdum purus tellus, at porta velit ullamcorper nec. Curabitur porta sem placerat mi tincidunt consequat. Mauris sagittis imperdiet lectus sed mattis.

In ut libero et turpis facilisis ultrices a sit amet orci. Nunc pulvinar scelerisque eleifend. Donec feugiat augue sed justo auctor faucibus. Nam ut nisl non est cursus pharetra. Curabitur vestibulum magna eget lectus egestas tempus. Vestibulum massa justo, facilisis id nulla at, eleifend auctor risus. Ut id nibh sem. Phasellus at ullamcorper orci. Cras ac diam massa. Nullam scelerisque ex eu fermentum elementum.

Vivamus a urna non tortor molestie vulputate. In nec justo quis urna convallis volutpat. Quisque laoreet eros eu pulvinar posuere. Mauris ut venenatis magna, et commodo nisl. Proin purus nulla, gravida a consequat eget, vestibulum sed enim. Nunc vitae arcu libero. Mauris a tortor felis. Sed sed erat quis lorem congue ornare vitae in dui. In cursus nec magna eget gravida. Maecenas finibus feugiat magna quis lobortis. Suspendisse lacinia quam vel dolor molestie vulputate. Nam ut vulputate massa. Aenean maximus erat odio. Duis lacinia ac est maximus sodales. Curabitur risus risus, commodo nec euismod in, varius ac augue. Vivamus tempor dignissim augue vitae aliquam.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eget iaculis lorem, fringilla luctus neque. Nunc quam tortor, vestibulum quis libero ac, consectetur vestibulum tellus. Curabitur imperdiet nisi diam, vitae mattis purus porttitor quis. In sed sem ligula. Vivamus fringilla placerat nisi, in efficitur diam viverra in. Praesent elit quam, consectetur quis est quis, congue mattis lorem. Aenean tempor, eros sit amet semper viverra, tellus quam posuere mauris, eget condimentum nisl elit id quam. Donec sed convallis purus, vel suscipit sem. Proin porta mauris ac eleifend elementum. Proin tellus leo, semper consectetur odio sed, molestie ultricies sem. Vivamus condimentum, purus fringilla mattis euismod, mi lectus mollis metus, at posuere augue libero et erat. Morbi laoreet ultricies nulla, id sodales nisi feugiat vel. Nam sit amet eleifend felis. Aenean eleifend velit sem, et sagittis erat accumsan et.

Nulla quis dolor rutrum, finibus arcu eget, ornare nisl. Integer ultrices dictum nibh vel sodales. In facilisis dolor eu condimentum congue. Nullam sed maximus nibh. Vivamus interdum dolor sed leo molestie, sed maximus enim tristique. Morbi imperdiet eget massa quis lobortis. Nullam mollis finibus urna, a auctor massa rhoncus ut. Suspendisse orci quam, congue nec nisl at, eleifend porta libero.
    </div>
  </div>
  <!-- <div id="about-night-border"></div> -->
</div>

</template>



<script>

export default { 
  name: "About",
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
      let canvas = this.$refs.innerPageBorders;
      let ctx = canvas.getContext("2d");
      let container = this.$refs.about;
      let measurements = container.getBoundingClientRect();
      // console.log(measurements.width);
      // console.log(measurements.height);
      canvas.width = measurements.width;
      // console.log(canvas.width);
      canvas.height = measurements.height;
      // console.log(canvas.height);
      // canvas.width = 300;
      // canvas.height = 100;

      // console.log(this.$refs.about.offsetWidth);
      // canvas.width = this.$refs.about.offsetWidth;
      // canvas.height = this.$refs.about.offsetHeight;
      // canvas.width = this.$refs.innerPageBorders.offsetWidth;
      // canvas.height = this.$refs.innerPageBorders.offsetHeight;
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
      // ctx.moveTo(0, h);
      // ctx.lineTo(w, h);
      // ctx.moveTo(0, 0);
      // ctx.lineTo(0, h);
      // ctx.translate(0.5, 0);
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
      // ctx.moveTo(0, h);
      // ctx.lineTo(w, h);
      // ctx.moveTo(w, 0);
      // ctx.lineTo(w, h);
      // ctx.translate(0.5, 0);
      ctx.moveTo(w - 1, 0);
      ctx.lineTo(w - 1, h);
      ctx.stroke();
    },
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

#about-container {
  @include flex-center;
  height: 100%;
  // width: 100%;
  width: 80%;
  position: relative;
}

#about {
  // position: fixed;
  // bottom: 0;
  // height: calc(100% - 75px);
  position: sticky;
  height: 100%;
  // width: 80%;
  width: 100%;
  border-image: none;
  // border-left: 2px solid rgb(100, 100, 100);
  // border-right: 2px solid rgb(100, 100, 100);
  border-left: 2px solid black;
  border-right: 2px solid black;
  // background-color: rgba(black, 0.2);
  // background: linear-gradient(160deg, rgba(222,22,79,0.2) 0%, rgba(42,67,232,0.2) 50%, rgba(47,189,40,0.2) 100%);
  background-color: rgba(white, 0.6);
  // z-index: 150;
  // overflow-x: visible;
  overflow-y: scroll;
  // padding-bottom: 250px;
  // margin-bottom: -250px;
  // z-index: initial;
}
  #about::-webkit-scrollbar {
    width: 6px;
  }
  #about::-webkit-scrollbar-track {
    background: rgb(235, 235, 235); 
  }
  #about::-webkit-scrollbar-thumb {
    background: rgb(200, 200, 200); 
  }
  #about::-webkit-scrollbar-thumb:hover {
    background: rgb(175, 175, 175); 
  }
  // #about::after {
  //   z-index: -1;
  // }
  body.nightmode #about {
    // height: 100%;
    // width: 80%;
    // width: calc(100% - 2px);
    background-color: rgba(black, 0.6);
    // border-left: 2px solid white;
    // border-right: 2px solid white;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    // border-left: none;
    // border-right: none;
    // border-image: linear-gradient(
    //   180deg, 
    //   $gradient-red, 
    //   $gradient-blue,
    //   $gradient-green
    //   ) 0 0 0 100% / 2px;
    // z-index: 10;
  }
    body.nightmode #about::-webkit-scrollbar-track {
      background: rgb(50, 50, 50); 
      // z-index: 150;
    }
    body.nightmode #about::-webkit-scrollbar-thumb {
      background: rgb(85, 85, 85);  
      // z-index: 150;
    }
    body.nightmode #about::-webkit-scrollbar-thumb:hover {
      background: rgb(110, 110, 110); 
      // z-index: 150;
    }
    // body.nightmode #about::after {
    //   content: "";
    //   display: block;
    //   // height: 100%;
    //   height: calc(100% - 75px);
    //   width: 80%;
    //   // width: 100%;
    //   position: fixed;
    //   // top: 0;
    //   bottom: 0;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   // background-color: white;
    //   border-right: 2px solid white;
    //   border-image: linear-gradient(
    //     360deg, 
    //     $gradient-red, 
    //     $gradient-blue,
    //     $gradient-green
    //     ) 0 100% 0 0 / 2px;
    //   z-index: -1;
    // }
    // #about-night-border {
    //   height: 100%;
    //   width: 100%;
    //   position: absolute;
    //   // background-color: white;
    //   border-right: 2px solid white;
    //   border-image: linear-gradient(
    //     360deg, 
    //     $gradient-red, 
    //     $gradient-blue,
    //     $gradient-green
    //     ) 0 100% 0 0 / 2px;
    //   // z-index: 100;
    // }
  
#about-text {
  padding: 100px;
  font-size: 50px;
  color: black;
  // z-index: 70;
  // overflow-y: scroll;
}
  body.nightmode #about-text {
    color: white;
  }

#inner-page-borders {
  // height: 100px;
  // width: 300px;
  // height: calc(100% + 2px);
  // height: calc(100% - 75px);
  // width: 100%;
  // width: 80%;
  // width: calc(80% - 2px);
  // width: calc(80% + 4px);
  // width: calc(100% )
  // width: inherit;
  position: fixed;
  // position: absolute;
  // top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  // z-index: 65;
  z-index: -1;
  pointer-events: none;
}
    


</style>