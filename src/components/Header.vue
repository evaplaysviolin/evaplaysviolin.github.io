<template>

<div id="header-container"></div>

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
  // border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  // background-color: rgba(0, 0, 0, 0.1);
  // Fallback style for border-image
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  // border-style: solid;
  border-image: linear-gradient(
    90deg, 
    $gradient-red, 
    $gradient-blue,
    $gradient-green
    ) 0 0 100% 0 / 1px;
}
  body.nightmode #header-container {
    // border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    // background-color: rgba(255, 255, 255, 0.1);
    border-image: none;
    border-bottom: 1px solid white;
  }

</style>