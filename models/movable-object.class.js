class MovableObject {
  positionX = 10;
  positionY = 70;
  img;
  height = 75;
  width = 75;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {
    console.log("Moving left");
  }
}
