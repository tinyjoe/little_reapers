class World {
  reaper = new Reaper();
  level = level1;
  canvas;
  ctx;
  keyboard;
  cameraX = 0;
  statusBar = new Statusbar();
  throwableObjects = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.reaper.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObjects();
    }, 200);
  }

  checkThrowObjects() {
    if (this.keyboard.THROW) {
      let bottle = new ThrowableObject(
        this.reaper.positionX + 50,
        this.reaper.positionY + 30
      );
      this.throwableObjects.push(bottle);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((e) => {
      if (this.reaper.isColliding(e)) {
        this.reaper.hit();
        this.statusBar.setPercentage(this.reaper.energy);
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.cameraX, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.ghosts);
    this.addObjectsToMap(this.level.foregroundObjects);
    this.ctx.translate(-this.cameraX, 0);
    this.addToMap(this.statusBar);
    this.ctx.translate(this.cameraX, 0);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.skulls);
    this.addToMap(this.reaper);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.cameraX, 0);
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
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    this.ctx.drawImage(mo.img, mo.positionX, mo.positionY, mo.width, mo.height);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.positionX = mo.positionX * -1;
  }

  flipImageBack(mo) {
    this.ctx.restore();
    mo.positionX = mo.positionX * -1;
  }
}
