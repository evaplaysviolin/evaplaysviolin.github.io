<template>

<div id="design-container">
  <div id="designs">
    <div class="design" 
      v-for="(design, index) in designs" :key="design.name"
      @mouseover="hover = index"
      @mouseleave="hover = null">
      <img :src="design.img" />
      <div v-if="index === hover" class="design-hover">{{ design.name }}</div>
    </div>
  </div>
</div>
  
</template>



<script>

export default { 
  name: "DesignPage",
  data() {
    return {
      designs: [
        { name:  "sticker", img: require('../assets/design/1.png') },
        { name:  "plushie", img: require('../assets/design/2.png') },
        { name:  "calligraphy", img: require('../assets/design/3.png') },
        { name:  "woodburn", img: require('../assets/design/4.png') },
        { name:  "crochet", img: require('../assets/design/5.png') },
        { name:  "announcement (canva)", img: require('../assets/design/6.png') },
        { name:  "papercutting", img: require('../assets/design/7.png') },
        { name:  "screenprint", img: require('../assets/design/8.png') },
        { name:  "cross-stitch", img: require('../assets/design/9.png') },
        { name:  "calligraphy (again)", img: require('../assets/design/10.png') },
        { name:  "schedule (canva)", img: require('../assets/design/11.png') },
        { name:  "commission", img: require('../assets/design/12.png') },
      ],
      hover: null,
    }
  }
}

</script>



<style scoped lang="scss">

#design-container {
  // @include flex-center;
  height: 100%;
  width: 100%;
}

#designs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  width: 100%;
  padding: 50px;
}

.design {
  @include flex-center;
  position: relative;
  height: 100%;
  width: 100%;
}
  .design img {
    @include image-scale;
    object-fit: cover;
  }
  .design-hover {
    @include font-default;
    @include flex-center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    text-shadow: 0 0 5px black;
    color: white;
    background-color: rgba(black, 0.5);
    padding: 10px;
    cursor: default;
  }

@media only screen and (max-width: 999px) {
  #designs {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 849px) {
  #designs {
    grid-gap: 30px;
    padding: 30px;
  }
}

@media only screen and (max-width: 599px) {
  #designs {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>