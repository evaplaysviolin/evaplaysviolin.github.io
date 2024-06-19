<template>

<div id="contact-container">
  <p>eva (they/she)</p>
  <p>email is the fastest way to reach me!</p>
  <a href="mailto:evaplaysviolin@gmail.com">evaplaysviolin@gmail.com</a>
  <!-- <a href="https://github.com/evaplaysviolin"><font-awesome-icon :icon="['fab', 'github']" /></a> -->
</div>

</template>



<script>

export default { 
  name: "ContactPage",
  data() {
    return {
    }
  }
}

</script>



<style scoped lang="scss">

#contact-container {
  @include font-default;
  @include flex-center;
  flex-direction: column;
  padding: 100px;
  color: black;
  cursor: default;
}
  body.nightmode #contact-container {
    color: white;
  }
  #contact-container p {
    margin-bottom: 50px;
  }
  #contact-container a {
    color: black;
    margin-bottom: 50px;
  }
    body.nightmode #contact-container a {
      color: white;
    }

@media only screen and (max-width: 799px) {
  #contact-container {
    @include font-smaller;
    padding: 50px;
  }
  #contact-container p {
    margin-bottom: 30px;
  }
}

@media only screen and (max-width: 499px) {
  #contact-container {
    padding: 30px;
  }
}

</style>