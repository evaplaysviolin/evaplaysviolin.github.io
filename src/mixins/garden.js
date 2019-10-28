import NodeGarden from '../vendors/nodegarden.js';
export default {
  name: "garden",
  data() {
    return {
      pixelRatio: window.devicePixelRatio,
      date: new Date(),
      appHeight: null,
      appWidth: null,
    }
  },
  methods: {
    createGarden(prop, container) {
      this[prop] = new NodeGarden(container);
    },
    gardenListener(e, container, prop, resetNode) {
      e.stopPropagation();
      e.preventDefault();
      const bcr = container.getBoundingClientRect();
      const scrollPos = {
        x: window.scrollX,
        y: window.scrollY
      };
      this[resetNode]++;
      if (this[resetNode] > this[prop].nodes.length - 1) {
        this[resetNode] = 1;
      }
      this[prop].nodes[this[resetNode]].reset({
        x: (e.pageX - scrollPos.x - bcr.left) * this.pixelRatio,
        y: (e.pageY - scrollPos.y - bcr.top) * this.pixelRatio,
        vx: 0,
        vy: 0
      });
    },
    setAppHeightAndWidth(container) {
      this.appHeight = container.clientHeight;
      this.appWidth = container.clientWidth;
    },
  }
};
