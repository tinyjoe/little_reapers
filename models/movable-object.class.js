class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2;
  energy = 100;
  offsetY = 0;
  offsetX = 0;
  lastHit = 0;
  hasCollided = false;

  /**
   * Moves the character to the right.
   */
  moveRight() {
    this.positionX += this.speed;
    this.otherDirection = false;
  }

  /**
   * Moves the character to the left.
   */
  moveLeft() {
    this.positionX -= this.speed;
    this.otherDirection = true;
  }

  /**
   * Plays a sequence of images to animate the character.
   * @param {Array} images - The array of images which should be animated.
   */
  playAnimation(images) {
    let index = this.currentImage % images.length;
    let path = images[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Plays a sequence of images once to animate the character.
   * @param {Array} images - The array of images which should be animated once.
   */
  playAnimationOnce(images) {
    for (let index = 0; index < images.length; index++) {
      const path = images[index];
      this.img = this.imageCache[path];
    }
  }

  /**
   * Makes sure that the character drops back on the ground after jumping.
   */
  applyGravity() {
    setStoppableInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.positionY -= this.speedY;
        this.speedY -= this.acceleration;
        if (this.otherDirection) {
          this.positionX -= this.acceleration;
        } else {
          this.positionX += this.acceleration;
        }
      }
    }, 1000 / 20);
  }

  /**
   * Makes sure that the character disappears after a certain action.
   * @param {Object} mo - The MovableObject which should be disappearing.
   */
  disappear(mo) {
    setStoppableInterval(() => {
      this.positionX = mo.positionX;
      this.positionY += this.speedY;
      this.speedY += this.acceleration * 3;
      mo.hasCollided = true;
    }, 1000 / 20);
  }

  /**
   * Checks if the character is above the ground line of the game.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.positionY < 325;
    }
  }

  /**
   * Makes the character jump.
   */
  jump() {
    this.speedY = 25;
  }

  /**
   * Checks if the character is colliding horizontally with another object.
   * @param {Object} mo - The MovableObject with which the charcter is colliding.
   */
  isColliding(mo) {
    return (
      this.positionX + this.width - this.offsetX >= mo.positionX + mo.offsetX &&
      this.positionX + this.offsetX <= mo.positionX + mo.width - mo.offsetX &&
      this.positionY + this.height >= mo.positionY + mo.offsetY &&
      this.positionY + this.offsetY <= mo.positionY + mo.height
    );
  }

  /**
   * Checks if the character is colliding vertically with another object.
   * @param {Object} mo - The MovableObject with which the charcter is colliding.
   */
  isCrushing(mo) {
    return (
      this.positionX + this.width - this.offsetX >= mo.positionX + mo.offsetX &&
      this.positionX + this.offsetX <= mo.positionX + mo.width - mo.offsetX &&
      this.positionY + this.height >= mo.positionY + mo.offsetY &&
      this.positionY + this.offsetY < mo.positionY + mo.offsetY + 10
    );
  }

  /**
   * Action after the character collides with another object and is hit.
   */
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = Date.now();
    }
  }

  /**
   * Checks if the character is dead.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Checks if the character is hurt.
   */
  isHurt() {
    let timespan = Date.now() - this.lastHit - 1000;
    return timespan < 250;
  }
}
