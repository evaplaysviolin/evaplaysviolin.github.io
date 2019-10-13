<template>

<div id="header-container">
  <router-link :to="{ path: '/' }">home</router-link>
</div>

</template>



<script>

export default { 
  name: "Header",
  data() {
    return {
    }
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
  border-bottom: 2px solid rgb(100, 100, 100);
}
  body.nightmode #header-container {
    // border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    // background-color: rgba(255, 255, 255, 0.1);
    
    // border-image: none;
    // border-bottom: 2px solid white;

    // Fallback style for border-image
  border-bottom: 2px solid white;
  // border-style: solid;
  border-image: linear-gradient(
    90deg, 
    $gradient-red, 
    $gradient-blue,
    $gradient-green
    ) 0 0 100% 0 / 2px;
  }

</style>