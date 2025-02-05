class Coin extends MovableObject {
  height = 50;
  width = 50;
  offsetY = 0;
  offsetX = 0;
  speedY = 0;
  acceleration = 2;

  constructor() {
    super();
    this.loadImage("./img/elements/coin.png");
    this.positionX = 700 + Math.random() * 1300;
    this.positionY = 370 + Math.random() * 50;
  }
}
