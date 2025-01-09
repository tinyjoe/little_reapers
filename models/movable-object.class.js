class MovableObject {
  positionX = 0;
  positionY = 150; //325
  img;
  height = 200;
  width = 200;
  imageCache = {};
  speed = 0.15;
  otherDirection = false;
  currentImage = 0;
  speedY = 0;
  acceleration = 2;
  energy = 100;
  offsetY = 0;
  offsetX = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

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
    return this.positionY < 325;
  }

  jump() {
    this.speedY = 25;
  }

  isColliding(mo) {
    return (
      this.positionX + this.width - this.offsetX >= mo.positionX &&
      this.positionX - this.offsetX <= mo.positionX + mo.width &&
      this.positionY + this.offsetY + this.height >= mo.positionY &&
      this.positionY + this.offsetY <= mo.positionY + mo.height
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    }
  }

  isDead() {
    return this.energy == 0;
  }
}
