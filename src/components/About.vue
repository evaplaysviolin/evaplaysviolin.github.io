<template>

<div id="about-text">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem at nisi feugiat luctus. 
  Quisque mollis elit lorem, facilisis vehicula leo rutrum non. Quisque ullamcorper pharetra orci, quis venenatis magna dictum sed. 
  In pharetra orci eros, sit amet fringilla dui interdum id. Proin feugiat diam id iaculis pretium. Morbi ac ex eu turpis tincidunt bibendum ullamcorper ut nibh. 
  Nunc vitae consequat massa. Suspendisse vitae est nec mi maximus maximus. Vivamus pretium, orci vitae tristique aliquam, 
  sapien nisl efficitur orci, et ullamcorper sapien mauris id justo. Nulla pulvinar porta nulla sed feugiat. 
  Pellentesque mollis et leo eget viverra. Nunc interdum purus tellus, at porta velit ullamcorper nec. 
  Curabitur porta sem placerat mi tincidunt consequat. Mauris sagittis imperdiet lectus sed mattis.

  In ut libero et turpis facilisis ultrices a sit amet orci. Nunc pulvinar scelerisque eleifend. 
  Donec feugiat augue sed justo auctor faucibus. Nam ut nisl non est cursus pharetra. Curabitur vestibulum magna eget lectus egestas tempus. 
  Vestibulum massa justo, facilisis id nulla at, eleifend auctor risus. Ut id nibh sem. Phasellus at ullamcorper orci. 
  Cras ac diam massa. Nullam scelerisque ex eu fermentum elementum.

  Vivamus a urna non tortor molestie vulputate. In nec justo quis urna convallis volutpat. Quisque laoreet eros eu pulvinar posuere. 
  Mauris ut venenatis magna, et commodo nisl. Proin purus nulla, gravida a consequat eget, vestibulum sed enim. Nunc vitae arcu libero. 
  Mauris a tortor felis. Sed sed erat quis lorem congue ornare vitae in dui. In cursus nec magna eget gravida. Maecenas finibus feugiat magna quis lobortis. 
  Suspendisse lacinia quam vel dolor molestie vulputate. Nam ut vulputate massa. Aenean maximus erat odio. Duis lacinia ac est maximus sodales. 
  Curabitur risus risus, commodo nec euismod in, varius ac augue. Vivamus tempor dignissim augue vitae aliquam.

  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eget iaculis lorem, fringilla luctus neque. 
  Nunc quam tortor, vestibulum quis libero ac, consectetur vestibulum tellus. Curabitur imperdiet nisi diam, vitae mattis purus porttitor quis. 
  In sed sem ligula. Vivamus fringilla placerat nisi, in efficitur diam viverra in. Praesent elit quam, consectetur quis est quis, congue mattis lorem. 
  Aenean tempor, eros sit amet semper viverra, tellus quam posuere mauris, eget condimentum nisl elit id quam. Donec sed convallis purus, vel suscipit sem. 
  Proin porta mauris ac eleifend elementum. Proin tellus leo, semper consectetur odio sed, molestie ultricies sem. 
  Vivamus condimentum, purus fringilla mattis euismod, mi lectus mollis metus, at posuere augue libero et erat. Morbi laoreet ultricies nulla, id sodales nisi feugiat vel. Nam sit amet eleifend felis. Aenean eleifend velit sem, et sagittis erat accumsan et.

  Nulla quis dolor rutrum, finibus arcu eget, ornare nisl. Integer ultrices dictum nibh vel sodales. 
  In facilisis dolor eu condimentum congue. Nullam sed maximus nibh. Vivamus interdum dolor sed leo molestie, sed maximus enim tristique. 
  Morbi imperdiet eget massa quis lobortis. Nullam mollis finibus urna, a auctor massa rhoncus ut. Suspendisse orci quam, congue nec nisl at, eleifend porta libero.
</div>

</template>



<script>

export default { 
  name: "About",
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
  padding: 100px;
  font-size: 50px;
  color: black;
}
  body.nightmode #about-text {
    color: white;
  }

</style>