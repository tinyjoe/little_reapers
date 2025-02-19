class ThrowableObject extends MovableObject {
  offsetX = 0;
  offsetY = 0;
  lastThrow;

  /**
   * Represents a bottle which the reaper can throw.
   * @constructor
   * @param {int} x - The position of the object on the x-axis.
   * @param {int} y - The position of the object on the y-axis.
   */
  constructor(x, y) {
    super().loadImage("./img/elements/bottle.png");
    this.positionX = x;
    this.positionY = y;
    this.height = 80;
    this.width = 60;
    this.throw();
  }

  /**
   * Defines the throw action.
   */
  throw() {
    this.speedY = 5;
    this.applyGravity();
    setStoppableInterval(() => {
      this.positionX += 3;
    }, 25);
    this.lastThrow = new Date().getTime();
  }
}
