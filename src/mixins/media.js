export default { 
  name: "media",
  methods: {
    checkMediaQuery: function() {
      // this.lessThan974 = window.matchMedia("(max-width: 974px)").matches;
      // this.lessThan849 = window.matchMedia("(max-width: 849px)").matches;
      // this.lessThan724 = window.matchMedia("(max-width: 724px)").matches;
      // this.lessThan599 = window.matchMedia("(max-width: 599px)").matches;
      // this.lessThan499 = window.matchMedia("(max-width: 499px)").matches;
      // this.lessThan399 = window.matchMedia("(max-width: 399px)").matches;
    },
  },
  mounted() {
    window.addEventListener("resize", this.checkMediaQuery);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMediaQuery);
  } 
}