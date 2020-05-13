<template>

<div id="code-container">
  <div id="examples-container">
    <div class="example"
      v-for="(example, index) in examples" :key="example">
      <div class="large image-container" @click="openDetails(index)">
        <div class="fade" v-if="detailsOpen"></div>
        <img :src="image(example, 'large')" />
      </div>
      <!-- <div class="small-container">
        <div class="small image-container"><img :src="image(example, '1')" /></div>
        <div class="small image-container"><img :src="image(example, '2')" /></div>
        <div class="small image-container"><img :src="image(example, '3')" /></div>
      </div> -->
      <div class="example-detail" v-if="current === index">
        <div class="detail-close" 
          :style="position"
          @click="closeDetails()">
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>
        <div class="large-detail image-container"><img :src="image(example, 'large')" /></div>
        <div class="small-container">
          <div class="small image-container"><img :src="image(example, '1')" /></div>
          <div class="small image-container"><img :src="image(example, '2')" /></div>
          <div class="small image-container"><img :src="image(example, '3')" /></div>
        </div>
        <div class="detail-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem at nisi feugiat luctus. Quisque mollis elit lorem, facilisis vehicula leo rutrum non. Quisque ullamcorper pharetra orci, quis venenatis magna dictum sed. In pharetra orci eros, sit amet fringilla dui interdum id. Proin feugiat diam id iaculis pretium. Morbi ac ex eu turpis tincidunt bibendum ullamcorper ut nibh. Nunc vitae consequat massa. Suspendisse vitae est nec mi maximus maximus. Vivamus pretium, orci vitae tristique aliquam, sapien nisl efficitur orci, et ullamcorper sapien mauris id justo. Nulla pulvinar porta nulla sed feugiat. Pellentesque mollis et leo eget viverra. Nunc interdum purus tellus, at porta velit ullamcorper nec. Curabitur porta sem placerat mi tincidunt consequat. Mauris sagittis imperdiet lectus sed mattis. In ut libero et turpis facilisis ultrices a sit amet orci. Nunc pulvinar scelerisque eleifend. Donec feugiat augue sed justo auctor faucibus. Nam ut nisl non est cursus pharetra. Curabitur vestibulum magna eget lectus egestas tempus. Vestibulum massa justo, facilisis id nulla at, eleifend auctor risus. Ut id nibh sem. Phasellus at ullamcorper orci. Cras ac diam massa. Nullam scelerisque ex eu fermentum elementum. Vivamus a urna non tortor molestie vulputate. In nec justo quis urna convallis volutpat. Quisque laoreet eros eu pulvinar posuere. Mauris ut venenatis magna, et commodo nisl. Proin purus nulla, gravida a consequat eget, vestibulum sed enim. Nunc vitae arcu libero. Mauris a tortor felis. Sed sed erat quis lorem congue ornare vitae in dui. In cursus nec magna eget gravida. Maecenas finibus feugiat magna quis lobortis. Suspendisse lacinia quam vel dolor molestie vulputate. Nam ut vulputate massa. Aenean maximus erat odio. Duis lacinia ac est maximus sodales. Curabitur risus risus, commodo nec euismod in, varius ac augue. Vivamus tempor dignissim augue vitae aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eget iaculis lorem, fringilla luctus neque. Nunc quam tortor, vestibulum quis libero ac, consectetur vestibulum tellus. Curabitur imperdiet nisi diam, vitae mattis purus porttitor quis. In sed sem ligula. Vivamus fringilla placerat nisi, in efficitur diam viverra in. Praesent elit quam, consectetur quis est quis, congue mattis lorem. Aenean tempor, eros sit amet semper viverra, tellus quam posuere mauris, eget condimentum nisl elit id quam. Donec sed convallis purus, vel suscipit sem. Proin porta mauris ac eleifend elementum. Proin tellus leo, semper consectetur odio sed, molestie ultricies sem. Vivamus condimentum, purus fringilla mattis euismod, mi lectus mollis metus, at posuere augue libero et erat. Morbi laoreet ultricies nulla, id sodales nisi feugiat vel. Nam sit amet eleifend felis. Aenean eleifend velit sem, et sagittis erat accumsan et. Nulla quis dolor rutrum, finibus arcu eget, ornare nisl. Integer ultrices dictum nibh vel sodales. In facilisis dolor eu condimentum congue. Nullam sed maximus nibh. Vivamus interdum dolor sed leo molestie, sed maximus enim tristique. Morbi imperdiet eget massa quis lobortis. Nullam mollis finibus urna, a auctor massa rhoncus ut. Suspendisse orci quam, congue nec nisl at, eleifend porta libero.
        </div>
      </div>
    </div>
  </div>
</div>

</template>



<script>

export default { 
  name: "Code",
  data() {
    return {
      examples: [
        "dxa",        
        "simon",
        "ttt",
        "pomodoro",
        "calculator"
      ],
      current: null,
      detailsOpen: false,
      position: {
        top: 0,
        left: 0
      }
    }
  },
  methods: {
    image: function (name, type) {
      return require(`../assets/${name}_${type}.png`);
    },
    openDetails: function (index) {
      this.current = index;
      this.detailsOpen = true;
    },
    closeDetails: function () {
      this.current = null;
      this.detailsOpen = false;
    },
    getPosition: function () {
      // Get size of close button
      console.log(document.getElementsByClassName("detail-close"));
      let element = document.getElementsByClassName("detail-close")[0];
      console.log(element);
      let x = element.getBoundingClientRect();
      let height = x.height;
      let width = x.width;
      // Get size of container
      let container = document.getElementById("code-container");
      let position = container.getBoundingClientRect();
      // Calculate left position (subtract width of button)
      // Get right position but use as left value
      let left = position.right - width;
      // Set top and left
      this.position.top = `${position.top}px`;
      this.position.left = `${left}px`;
      console.log(this.position);
    }
  },
  mounted() {
    window.addEventListener("resize", this.getPosition);
  },
  updated() {
    console.log("updated");
    if (this.detailsOpen) {
      this.getPosition();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getPosition);
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
  height: 100%;
  width: 100%;
  padding: 50px;
}

#examples-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  width: 100%;
  // position: relative;
}
  .example {
    @include flex-center;
    flex-direction: column;
    // position: relative;
    // margin-bottom: 50px;
  }
    .large {
      width: 100%;
      position: relative;
      box-shadow: 0px 0px 10px 0px rgba(128, 128, 128, 0.5);
      // width: 60%;
      // margin-bottom: 10px;
    }
    .fade::after {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: inset 0 0 0 200px rgba(white, 0.8);
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
    z-index: 1;
  }
    .detail-close {
      position: fixed;
      // position: absolute;
      // top: 0;
      // right: 0;
      font-size: 28px;
      padding: 10px;
      // background-color: red;
    }
    .large-detail {
      width: 60%;
      box-shadow: 0px 0px 10px 0px rgba(128, 128, 128, 0.5);
      margin-bottom: 10px;
    }
    .small-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      width: 60%;
    }
      .small {
        width: 100%;
        box-shadow: 0px 0px 10px 0px rgba(128, 128, 128, 0.5);
      }
  .image-container img {
    @include image-scale;
  }

</style>