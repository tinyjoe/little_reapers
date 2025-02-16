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
  lastThrow = 0;

  /**
   * Represents the world in which the game takes place.
   * @constructor
   * @param {Element} canvas - The canvas element in which the game is staged.
   * @param {object} keyboard - The object where all the keys are defined.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  /**
   * Defines the game world.
   */
  setWorld() {
    this.reaper.world = this;
  }

  /**
   * Runs the game world and defines all the actions that can happen during the game.
   */
  run() {
    setStoppableInterval(() => {
      this.checkCollisions();
      this.checkBottlesCount();
      this.collectCoins();
      this.checkBottleCollisions();
    }, 60);
  }

  /**
   * Checks and sets the bottle count if a bottle has been thrown.
   */
  checkBottlesCount() {
    let now = Date.now();
    if (
      this.keyboard.THROW &&
      this.throwableObjects.length < 15 &&
      now - this.lastThrow >= 1000
    ) {
      this.throwBottle(now);
    } else if (this.keyboard.THROW && this.throwableObjects.length >= 15) {
      noBottleSound.play();
    }
  }

  /**
   * Defines what happens when a bottle is thrown and how a bottle is created.
   */
  throwBottle(now) {
    this.lastThrow = now;
    let bottle = new ThrowableObject(
      this.reaper.positionX + 80,
      this.reaper.positionY + 0
    );
    this.throwableObjects.push(bottle);
    throwSound.play();
    this.bottleCounter.setCounter(15 - this.throwableObjects.length);
  }

  /**
   * Checks if the bottle has hit an enemy.
   */
  checkBottleCollisions() {
    this.throwableObjects.forEach((bottle) => {
      this.level.enemies.forEach((e) => {
        if (e instanceof Skeleton && bottle.isColliding(e))
          this.enemyCollision(e, bottle);
        else if (e instanceof Endboss && bottle.isColliding(e))
          this.endbossCollision(e, bottle);
      });
    });
  }

  /**
   * Checks if the bottle hit the endboss.
   * @param {object} e - The enemy object which was hit by the bottle.
   * @param {object} bottle - The bottle object which was thrown.
   */
  endbossCollision(e, bottle) {
    e.hit();
    enemyHurt.play();
    bottle.disappear(bottle);
    this.endbossBar.setPercentage(e.energy);
  }

  /**
   * Checks if the bottle hit a skeleton.
   * @param {object} e - The enemy object which was hit by the bottle.
   * @param {object} bottle - The bottle object which was thrown.
   */
  enemyCollision(e, bottle) {
    e.disappear(e);
    enemyHurt.play();
    bottle.disappear(bottle);
  }

  /**
   * Checks if an enemy is colliding with the reaper.
   */
  checkCollisions() {
    this.level.enemies.forEach((e) => {
      if (this.isJumpingOn(e)) {
        e.disappear(e);
        enemyHurt.play();
      }
      if (this.isRunningInto(e)) {
        this.reaper.hit();
        this.statusBar.setPercentage(this.reaper.energy);
      }
    });
  }

  /**
   * Checks if the reaper is jumping on an enemy.
   * @param {object} e - The enemy object which was jumped on by the reaper.
   */
  isJumpingOn(e) {
    return this.reaper.isCrushing(e) && e instanceof Skeleton;
  }

  /**
   * Checks if the reaper is running into an enemy.
   * @param {object} e - The enemy object which collided with the reaper.
   */
  isRunningInto(e) {
    return (
      this.reaper.isColliding(e) && !e.hasCollided && !this.reaper.isCrushing(e)
    );
  }

  /**
   * Checks if a coin was collected by the reaper.
   */
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

  /**
   * Draws all elements of the game world.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.cameraX, 0);
    this.drawLevel();
    this.ctx.translate(-this.cameraX, 0);
    this.drawStats();
    this.ctx.translate(this.cameraX, 0);
    this.drawCharacters();
    this.ctx.translate(-this.cameraX, 0);
    this.drawAnimationFrame();
  }

  /**
   * Draws the frame where the game animations take place.
   */
  drawAnimationFrame() {
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Draws the characters of the game.
   */
  drawCharacters() {
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addToMap(this.reaper);
    this.addObjectsToMap(this.throwableObjects);
  }

  /**
   * Draws the counters and health bars of the game.
   */
  drawStats() {
    this.addToMap(this.statusBar);
    this.addToMap(this.endbossBar);
    this.addToMap(this.bottleCounter);
    this.addToMap(this.coinsCounter);
  }

  /**
   * Draws the background elements of the game.
   */
  drawLevel() {
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.ghosts);
    this.addObjectsToMap(this.level.foregroundObjects);
  }

  /**
   * Defines what happens when the game ends.
   */
  endGame() {
    let gameScreen = document.getElementById("gamescreen");
    let endScreen = document.getElementById("endScreen");
    let gameOverScreen = document.getElementById("gameOverScreen");
    if (isGameOver) {
      this.showEndScreen(gameScreen, gameOverScreen);
    } else if (isGameWon) {
      this.showEndScreen(gameScreen, endScreen);
    }
    clearLevel();
  }

  /**
   * Shows an end screen when the game has ended.
   * @param {Element} gameScreen - The screen on which the game was displayed.
   * @param {Element} endScreen - The screen that should be displayed when the game has ended.
   */
  showEndScreen(gameScreen, endScreen) {
    allGameInterval.forEach((i) => clearInterval(i));
    SOUND_EFFECTS.forEach((s) => s.pause());
    setTimeout(() => {
      gameScreen.classList.add("hidden");
      endScreen.classList.remove("hidden");
    }, 1000);
  }

  /**
   * Adds multiple objects to the game world.
   * @param {Array} objects - The array of objects which should be added to the game world.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds a single object to the game world.
   * @param {Object} mo - The object which should be added to the game world.
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    this.ctx.drawImage(mo.img, mo.positionX, mo.positionY, mo.width, mo.height);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * Flips the image of an object to the other direction.
   * @param {Object} mo - The object which should be flipped.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.positionX = mo.positionX * -1;
  }

  /**
   * Flips the image of an object back to its original direction.
   * @param {Object} mo - The object which should be flipped.
   */
  flipImageBack(mo) {
    this.ctx.restore();
    mo.positionX = mo.positionX * -1;
  }
}
