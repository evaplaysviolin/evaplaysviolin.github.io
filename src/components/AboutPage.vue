<template>

<div id="about-text">
  <p>(they/she)<p>
  <p>originally from san francisco, now residing across the bay in richmond</p>
  <p>i enjoy cooking and crafting</p>
  <p>i also like trying out new hobbies and learning things! i made a cute frog friend in blender recently</p>
  <p>my two cats, kaya and toast, are the best. please ask me for pictures</p>
</div>

</template>



<script>

export default { 
  name: "AboutPage",
  // props: ["night"],
  data() {
    return {
    }
  },
  // watch: {
  //   night () {
  //   }
  // },
  methods: {
  },
  mounted() {
    // window.addEventListener("resize", () => {
    // });
  }
}

</script>



<style scoped lang="scss">
  
#about-text {
  @include font-default;
  padding: 100px;
  color: black;
  cursor: default;
}
  body.nightmode #about-text {
    color: white;
  }
  #about-text p {
    margin-bottom: 50px;
  }

@media only screen and (max-width: 799px) {
  #about-text {
    @include font-smaller;
    padding: 50px;
  }
  #about-text p {
    margin-bottom: 30px;
  }
}

@media only screen and (max-width: 499px) {
  #about-text {
    padding: 30px;
  }
}

</style>