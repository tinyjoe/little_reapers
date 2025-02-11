class ThrowableObject extends MovableObject {
  offsetX = 0;
  offsetY = 0;
  throwInterval;

  constructor(x, y) {
    super().loadImage("./img/elements/bottle.png");
    this.positionX = x;
    this.positionY = y;
    this.height = 80;
    this.width = 60;
    this.throw();
    allGameInterval.push(this.throwInterval);
  }

  throw() {
    this.speedY = 5;
    this.applyGravity();
    this.throwInterval = setInterval(() => {
      this.positionX += 10;
    }, 25);
  }
}
