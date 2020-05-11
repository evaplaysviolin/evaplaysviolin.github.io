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
        <div class="detail-close" @click="closeDetails()">X</div>
        <div class="large-detail image-container"><img :src="image(example, 'large')" /></div>
        <div class="small-container">
          <div class="small image-container"><img :src="image(example, '1')" /></div>
          <div class="small image-container"><img :src="image(example, '2')" /></div>
          <div class="small image-container"><img :src="image(example, '3')" /></div>
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
      detailsOpen: false
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
    }
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
      position: absolute;
      top: 0;
      right: 0;
      font-size: 50px;
    }
    .large-detail {
      width: 60%;
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
      }
  .image-container img {
    @include image-scale;
  }

</style>