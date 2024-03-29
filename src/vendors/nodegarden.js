
import Node from './node';

const { devicePixelRatio = 1, requestAnimationFrame } = window;

let bcr, mouseNode, scrollPos;

export default class NodeGarden {
  constructor (container) {
    this.nodes = [];
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.started = false;
    this.nightmode = false;

    this.force = 3;

    // Pink
    this.color1 = "222, 22, 79";
    // Blue
    this.color2 = "42, 67, 232";
    // Green
    this.color3 = "47, 189, 40";

    if (devicePixelRatio && (devicePixelRatio !== 1)) {
      // if retina screen, scale canvas
      this.canvas.style.transform = 'scale(' + 1 / devicePixelRatio + ')';
      this.canvas.style.transformOrigin = '0 0';
    }

    this.mouseUp = this.mouseUp.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);

    if (this.container.id !== "background-container") {
      this.container.addEventListener("mouseover", this.mouseOver);
    }

    this.container.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      bcr = this.container.getBoundingClientRect();
      scrollPos = {
        x: window.scrollX,
        y: window.scrollY
      };
      // Add mouse node
      mouseNode = new Node(this);
      mouseNode.x = (e.pageX - scrollPos.x - bcr.left) * devicePixelRatio;
      mouseNode.y = (e.pageY - scrollPos.y - bcr.top) * devicePixelRatio;
      mouseNode.m = 15;

      mouseNode.update = () => {};
      mouseNode.reset = () => {};
      mouseNode.render = () => {};

      this.nodes.unshift(mouseNode);

      this.container.addEventListener("mousemove", this.mouseMove);
      this.container.addEventListener("mouseup", this.mouseUp);
    });

    this.container.appendChild(this.canvas);
    this.resize();
  }

  mouseOver(e) {
    this.force = 15;
    this.container.addEventListener("mouseleave", this.mouseLeave);
  }

  mouseLeave(e) {
    this.container.removeEventListener("mouseleave", this.mouseLeave);
    this.force = 3;
  }

  mouseMove(e) {
    mouseNode.x = (e.pageX - scrollPos.x - bcr.left) * devicePixelRatio;
    mouseNode.y = (e.pageY - scrollPos.y - bcr.top) * devicePixelRatio; 
  }

  mouseUp(e) {
    this.container.removeEventListener("mousemove", this.mouseMove);
    this.container.removeEventListener("mouseup", this.mouseUp);
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i] === mouseNode) {
        this.nodes.splice(i--, 1);
        break;
      }
    }
  }

  start () {
    if (!this.playing) {
      this.playing = true;
      this.render(true);
    }
  }

  stop () {
    if (this.playing) {
      this.playing = false;
    }
  }

  resize () {
    this.width = this.container.clientWidth * devicePixelRatio;
    this.height = this.container.clientHeight * devicePixelRatio;
    this.area = this.width * this.height;

    // calculate nodes needed
    this.nodes.length = Math.sqrt(this.area) / 25 | 0;

    // set canvas size
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    let fillGradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    fillGradient.addColorStop("0", `rgb(${this.color1})`);
    fillGradient.addColorStop("0.5" , `rgb(${this.color2})`);
    fillGradient.addColorStop("1.0", `rgb(${this.color3})`);

    if (this.nightMode) {
      this.ctx.fillStyle = '#ffffff';
    } else {
      this.ctx.fillStyle = fillGradient;
    }

    // create nodes
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i]) {
        continue;
      }
      this.nodes[i] = new Node(this);
    }
  }

  toggleNightMode (night) {
    let fillGradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    fillGradient.addColorStop("0", `rgb(${this.color1})`);
    fillGradient.addColorStop("0.5" , `rgb(${this.color2})`);
    fillGradient.addColorStop("1.0", `rgb(${this.color3})`);

    if (night) {
      this.nightMode = true;
    } else {
      this.nightMode = false;
    }
    if (this.nightMode) {
      this.ctx.fillStyle = '#ffffff';
      document.body.classList.add('nightmode');
    } else {
      this.ctx.fillStyle = fillGradient;
      document.body.classList.remove('nightmode');
    }
  }

  render (start, time) {
    if (!this.playing) {
      return;
    }

    if (start) {
      requestAnimationFrame((time) => {
        this.render(true, time);
      });
    }

    const deltaTime = time - (this.lastTime || time);

    this.lastTime = time;

    // clear canvas
    this.ctx.clearRect(0, 0, this.width, this.height);

    // update links
    for (let i = 0; i < this.nodes.length - 1; i++) {
      const nodeA = this.nodes[i];
      for (let j = i + 1; j < this.nodes.length; j++) {
        const nodeB = this.nodes[j];
        const squaredDistance = nodeA.squaredDistanceTo(nodeB);

        // calculate gravity force
        // const force = 3 * (nodeA.m * nodeB.m) / squaredDistance;
        const force = this.force * (nodeA.m * nodeB.m) / squaredDistance;

        const opacity = force * 100;

        if (opacity < 0.025) {
          continue;
        }

        if (squaredDistance <= (nodeA.m / 2 + nodeB.m / 2) * (nodeA.m / 2 + nodeB.m / 2)) {
          // collision: remove smaller or equal - never both of them
          if (nodeA.m <= nodeB.m) {
            nodeA.collideTo(nodeB);
          } else {
            nodeB.collideTo(nodeA);
          }
          continue;
        }

        const distance = nodeA.distanceTo(nodeB);

        // calculate gravity direction
        const direction = {
          x: distance.x / distance.total,
          y: distance.y / distance.total
        };

        // draw gravity lines
        this.ctx.beginPath();
        if (this.nightMode) {
          this.ctx.strokeStyle = 'rgba(200,200,200,' + (opacity < 1 ? opacity : 1) + ')';
        } else {
          let lineGradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
          lineGradient.addColorStop("0", `rgba(${this.color1},${(opacity < 1 ? opacity : 1)})`);
          lineGradient.addColorStop("0.5" , `rgba(${this.color2},${(opacity < 1 ? opacity : 1)})`);
          lineGradient.addColorStop("1.0", `rgba(${this.color3},${(opacity < 1 ? opacity : 1)})`);
          this.ctx.strokeStyle = lineGradient;
        }
        this.ctx.moveTo(nodeA.x, nodeA.y);
        this.ctx.lineTo(nodeB.x, nodeB.y);
        this.ctx.stroke();

        nodeA.addForce(force, direction);
        nodeB.addForce(-force, direction);
      }
    }

    // render and update nodes
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].render();
      this.nodes[i].update(deltaTime || 0);
    }
  }
}
