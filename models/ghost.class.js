class Ghost extends MovableObject {
  ghostInterval;

  constructor() {
    super().loadImage("./img/game_background/layers/10.png");
    this.height = 150;
    this.width = 100;
    this.animate();
    allGameInterval.push(this.ghostInterval);
  }

  animate() {
    this.ghostInterval = setInterval(() => {
      this.positionY = Math.random() * 150;
      this.positionX = Math.random() * 2000;
    }, 2000);
  }
}
