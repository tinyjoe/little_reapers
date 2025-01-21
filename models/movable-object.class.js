class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2;
  energy = 100;
  offsetY = 0;
  offsetX = 0;
  lastHit = 0;

  moveRight() {
    this.positionX += this.speed;
    this.otherDirection = false;
  }

  moveLeft() {
    this.positionX -= this.speed;
    this.otherDirection = true;
  }

  playAnimation(images) {
    let index = this.currentImage % images.length;
    let path = images[index];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  playAnimationOnce(images) {
    for (let index = 0; index < images.length; index++) {
      const path = images[index];
      this.img = this.imageCache[path];
    }
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.positionY -= this.speedY;
        this.speedY -= this.acceleration;
        if (this.otherDirection) {
          this.positionX -= this.acceleration * 3;
        } else {
          this.positionX += this.acceleration * 3;
        }
      }
    }, 1000 / 20);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.positionY < 325;
    }
  }

  jump() {
    this.speedY = 25;
  }

  isColliding(mo) {
    return (
      this.positionX + this.width - this.offsetX >= mo.positionX + mo.offsetX &&
      this.positionX + this.offsetX <= mo.positionX + mo.width - mo.offsetX &&
      this.positionY + this.height - this.offsetY >=
        mo.positionY + mo.offsetY &&
      this.positionY + this.offsetY <= mo.positionY + mo.height - mo.offsetY
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timespan = new Date().getTime() - this.lastHit;
    return timespan < 10000;
  }
}
