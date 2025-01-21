class Skull extends DrawableObject {
  height = 50;
  width = 50;
  positionX = 100;
  positionY = 370;
  offsetY = 50;
  offsetX = 50;
  constructor() {
    super();
    this.loadImage("./img/elements/skull.png");
  }
}
