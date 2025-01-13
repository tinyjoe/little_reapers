class ThrowableObject extends MovableObject {
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
