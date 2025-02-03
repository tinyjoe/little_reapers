class ThrowableObject extends MovableObject {
  offsetX = 0;
  offsetY = 0;

  constructor(x, y) {
    super().loadImage("./img/elements/bottle.png");
    this.positionX = x;
    this.positionY = y;
    this.height = 80;
    this.width = 60;
    this.throw();
  }

  throw() {
    this.speedY = 5;
    this.applyGravity();
    setInterval(() => {
      this.positionX += 10;
    }, 25);
  }
}
