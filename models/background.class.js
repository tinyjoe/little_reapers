class Background extends MovableObject {
  width = 960;
  height = 540;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.positionX = x;
    this.positionY = 0;
  }
}
