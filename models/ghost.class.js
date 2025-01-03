class Ghost extends MovableObject {
  constructor() {
    super().loadImage("./img/game_background/layers/10.png");
    this.height = 150;
    this.width = 100;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.positionY = Math.random() * 150;
      this.positionX = Math.random() * 850;
    }, 2000);
  }
}
