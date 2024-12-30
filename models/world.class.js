class World {
  reaper = new Reaper();
  enemies = [new Skeleton(), new Skeleton(), new Skeleton()];
  ghosts = [new Ghost(), new Ghost(), new Ghost()];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(
      this.reaper.img,
      this.reaper.positionX,
      this.reaper.positionY,
      this.reaper.height,
      this.reaper.width
    );
    this.enemies.forEach((e) => {
      this.ctx.drawImage(e.img, e.positionX, e.positionY, e.height, e.width);
    });
    this.ghosts.forEach((g) => {
      this.ctx.drawImage(g.img, g.positionX, g.positionY, g.height, g.width);
    });
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
