<template>

<div id="about-text">
  <p>(she/they)<p>
  <p>originally from san francisco, now residing across the bay in richmond</p>
  <p>i enjoy cooking, knitting/crocheting, playing (video)games, and typing in all lowercase in my personal time</p>
  <p>i also enjoy trying out new hobbies and learning things! i made a cute frog friend in blender recently</p>
  <p>my two cats, kaya and toast (named after the southeast asian dish), are the best. i love them dearly and will show you pictures anytime, please ask</p>
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