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
  bottleCounter = new BottleCounter(15);
  coinsCounter = new CoinsCounter(this.count);
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
      this.collectCoins();
    }, 200);
  }

  checkThrowObjects() {
    if (this.keyboard.THROW && this.throwableObjects.length < 15) {
      let bottle = new ThrowableObject(
        this.reaper.positionX + 80,
        this.reaper.positionY + 0
      );
      this.throwableObjects.push(bottle);
      throwSound.play();
      this.bottleCounter.setCounter(15 - this.throwableObjects.length);
      this.level.enemies.forEach((e) => {
        if (e instanceof Endboss) {
          if (bottle.bottleHit(e)) {
            e.endbossHit();
            console.log("Endboss hit");
            this.endbossBar.setPercentage(e.energy);
          }
        } else {
          if (bottle.bottleHit(e)) {
            e.disappear(e);
            enemyHurt.play();
            console.log("Enemy hit");
          }
        }
      });
    } else if (this.keyboard.THROW && this.throwableObjects.length >= 15) {
      noBottleSound.play();
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((e) => {
      if (
        this.reaper.isColliding(e) &&
        this.reaper.isAboveGround() &&
        e instanceof Skeleton
      ) {
        e.disappear(e);
        enemyHurt.play();
      }
      if (this.reaper.isColliding(e) && !e.hasCollided) {
        this.reaper.hit();
        this.statusBar.setPercentage(this.reaper.energy);
      }
    });
  }

  collectCoins() {
    this.level.coins.forEach((c) => {
      if (this.reaper.isColliding(c) && !c.hasCollided) {
        c.disappear(c);
        coinSound.play();
        this.count++;
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
