class Ghost extends MovableObject {
  constructor() {
    super().loadImage("./img/game_background/layers/10.png");
    this.height = 200;
    this.width = 100;
    this.positionY = 0;
    this.positionX = Math.random() * 500;
  }
}
