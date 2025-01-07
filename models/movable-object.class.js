class MovableObject {
  positionX = 0;
  positionY = 325;
  img;
  height = 200;
  width = 200;
  imageCache = {};
  speed = 0.15;
  otherDirection = false;

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
}
