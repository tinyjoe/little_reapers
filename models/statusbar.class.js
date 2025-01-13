class Statusbar extends DrawableObject {
  percentage = 100;
  IMAGES_HEALTH = [
    "./img/statusbars/statusbar_reaper/2_statusbar_health/blue/0.png",
    "./img/statusbars/statusbar_reaper/2_statusbar_health/blue/20.png",
    "./img/statusbars/statusbar_reaper/2_statusbar_health/blue/40.png",
    "./img/statusbars/statusbar_reaper/2_statusbar_health/blue/60.png",
    "./img/statusbars/statusbar_reaper/2_statusbar_health/blue/80.png",
    "./img/statusbars/statusbar_reaper/2_statusbar_health/blue/100.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_HEALTH);
    this.positionX = 30;
    this.positionY = 10;
    this.width = 240;
    this.height = 64;
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
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
