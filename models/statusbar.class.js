class Statusbar extends DrawableObject {
  percentage = 100;

  constructor(images, positionX) {
    super();
    this.loadImages(images);
    this.positionX = positionX;
    this.positionY = 20;
    this.width = 200;
    this.height = 60;
    this.setPercentage(this.percentage, images);
  }

  setPercentage(percentage, images) {
    this.percentage = percentage;
    let path = images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
