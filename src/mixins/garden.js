import NodeGarden from '../vendors/nodegarden.js';
export default {
  name: "garden",
  data() {
    return {
      pixelRatio: window.devicePixelRatio,
      date: new Date(),
      night: false,
      appHeight: null,
      appWidth: null,
    }
  },
  methods: {
    createGarden(container) {
      this.nodeGarden = new NodeGarden(container);
    },
    gardenListener(e, container) {
      const bcr = container.getBoundingClientRect();
      const scrollPos = {
        x: window.scrollX,
        y: window.scrollY
      };
      this.resetNode++;
      if (this.resetNode > this.nodeGarden.nodes.length - 1) {
        this.resetNode = 1;
      }
      this.nodeGarden.nodes[this.resetNode].reset({
        x: (e.pageX - scrollPos.x - bcr.left) * this.pixelRatio,
        y: (e.pageY - scrollPos.y - bcr.top) * this.pixelRatio,
        vx: 0,
        vy: 0
      });
    },
  }
};
