class World {
  count = 0;
  reaper = new Reaper();
  level = level1;
  canvas;
  ctx;
  keyboard;
  cameraX = 0;
  statusBar = new ReaperHealth();
  endbossBar = new EndbossHealth();
  bottleCounter = new BottleCounter(10);
  coinsCounter = new CoinsCounter(this.count);
  throwableObjects = [];
  coinSound = new Audio("audio/coin.wav");
  throwSound = new Audio("audio/throw.wav");
  noBottleSound = new Audio("audio/none.mp3");

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
      this.collectCoins();
    }, 200);
  }

  checkThrowObjects() {
    if (this.keyboard.THROW && this.throwableObjects.length < 10) {
      let bottle = new ThrowableObject(
        this.reaper.positionX + 50,
        this.reaper.positionY + 30
      );
      this.throwableObjects.push(bottle);
      this.throwSound.play();
      this.bottleCounter.setCounter(10 - this.throwableObjects.length);
    } else if (this.keyboard.THROW && this.throwableObjects.length >= 10) {
      this.noBottleSound.play();
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

  collectCoins() {
    this.level.coins.forEach((c) => {
      if (this.reaper.isColliding(c)) {
        this.count++;
        c.disappear();
        this.coinSound.play();
      }
      this.coinsCounter.setCounter(this.count);
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
    this.addToMap(this.endbossBar);
    this.addToMap(this.bottleCounter);
    this.addToMap(this.coinsCounter);
    this.ctx.translate(this.cameraX, 0);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
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
