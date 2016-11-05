'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var width = window.innerWidth,
    height = window.innerHeight,
    canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    things = [],
    colors = ['#f0f', '#faf', '#fff'],
    textures = [new Image(), new Image(), new Image()];

textures[0].src = '../images/300-1-300x300-52.png';
textures[1].src = '../images/300-1-300x300-52.png';
textures[2].src = '../images/300-1-300x300-52.png';

canvas.width = width;
canvas.height = height;

var Thing = function () {
  function Thing() {
    _classCallCheck(this, Thing);

    this.x = width / 2;
    this.y = height / 2;
    this.z = Math.random();
    this.directionX = Math.random() > .5 ? 1 : -1;
    this.directionY = Math.random() > .5 ? 1 : -1;
    this.directionZ = Math.random() > .5 ? 1 : -1;
    this.velocityX = Math.random() * 3;
    this.velocityY = Math.random() * 3;
    this.velocityZ = (Math.random() - .5) / 200;
    this.color = colors[Math.floor(Math.random() * 3)];
    this.texture = textures[Math.floor(Math.random() * 3)];
    this.width = 128;
    this.height = 128;
  }

  Thing.prototype.render = function render() {
    this.x += this.velocityX * this.directionX;
    this.y += this.velocityY * this.directionY;
    this.z += this.velocityZ * this.directionZ;

    if (this.x < 0 || this.x > width - this.width) {
      this.directionX *= -1;
    }
    if (this.y < 0 || this.y > height - this.height) {
      this.directionY *= -1;
    }
    if (this.z < 0 || this.z > 1) {
      this.directionZ *= -1;
    }

    ctx.fillStyle = this.color;
    // ctx.globalAlpha = this.z;

    ctx.beginPath();
    // ctx.arc(this.x, this.y, this.width * Math.abs(this.z), 0, Math.PI * 2, true);
    ctx.drawImage(this.texture, this.x, this.y, this.width * this.z, this.height * this.z);
    ctx.fill();
  };

  return Thing;
}();

for (var i = 0; i < 100; i++) {
  things.push(new Thing());
}

var render = function render() {
  // ctx.clearRect(0, 0, width, height);

  for (var i = 0; i < things.length; i++) {
    things[i].render();
  }

  requestAnimationFrame(render);
};

textures[0].addEventListener('load', function () {
  render();
});

canvas.addEventListener('mousedown', function (e) {
  var x = e.pageX,
      y = e.pageY;

  for (var i = 0; i < things.length; i++) {
    var thing = things[i];

    if (x < thing.x && (x > thing.x - thing.width || x > thing.x + thing.width) && y < thing.y && (y > thing.y - thing.height || y > thing.y + thing.height)) {
      thing.width += 5;
      thing.height += 5;
    }
  }
}, false);