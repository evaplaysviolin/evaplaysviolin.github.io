<template>

<div id="code-container">
  <div id="examples-container">
    <div class="example"
      v-for="example in examples" :key="example">
      <div class="large image-container"><img :src="image(example, 'large')" /></div>
      <div class="small-container">
        <div class="small image-container"><img :src="image(example, '1')" /></div>
        <div class="small image-container"><img :src="image(example, '2')" /></div>
        <div class="small image-container"><img :src="image(example, '3')" /></div>
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
      ]
    }
  },
  methods: {
    image: function (name, type) {
      return require(`../assets/${name}_${type}.png`);
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
  width: 100%;
}

#examples-container {
  width: 100%;
}
  .example {
    @include flex-center;
    flex-direction: column;
    padding: 50px;
  }
    .large {
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