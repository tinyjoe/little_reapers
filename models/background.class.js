class Background extends MovableObject {
  width = 960;
  height = 540;

  /**
   * Represents the game background.
   * @constructor
   * @param {string} imagePath - The URL to the background image layer.
   * @param {int} x - The position of the background object on the x-axis.
   */
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.positionX = x;
    this.positionY = 0;
  }
}
