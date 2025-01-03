class World {
  reaper = new Reaper();
  enemies = [new Skeleton(), new Skeleton(), new Skeleton()];
  ghosts = [new Ghost(), new Ghost(), new Ghost()];
  backgroundObjects = [
    new Background("./img/game_background/layers/1.png", 0),
    new Background("./img/game_background/layers/2.png", 0),
    new Background("./img/game_background/layers/3.png", 0),
    new Background("./img/game_background/layers/4.png", 0),
    new Background("./img/game_background/layers/5.png", 0),
  ];
  foregroundObjects = [
    new Background("./img/game_background/layers/6.png", 0),
    new Background("./img/game_background/layers/7.png", 0),
    new Background("./img/game_background/layers/8.png", 0),
    new Background("./img/game_background/layers/9.png", 0),
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.ghosts);
    this.addObjectsToMap(this.foregroundObjects);
    this.addToMap(this.reaper);
    this.addObjectsToMap(this.enemies);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.positionX, mo.positionY, mo.width, mo.height);
  }
}
