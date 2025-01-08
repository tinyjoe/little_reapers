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
    setInterval(() => {
      this.positionX += this.speed;
    }, 1000 / 60);
  }

  moveLeft() {
    setInterval(() => {
      this.positionX -= this.speed;
    }, 10);
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
      }
    }, 1000 / 20);
  }

  isAboveGround() {
    return this.positionY < 325;
  }
}
