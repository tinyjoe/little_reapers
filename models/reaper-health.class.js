class ReaperHealth extends DrawableObject {
  percentage = 100;
  REAPER_HEALTH = [
    "./img/statusbars/statusbar_reaper/statusbar_reaper_0.png",
    "./img/statusbars/statusbar_reaper/statusbar_reaper_20.png",
    "./img/statusbars/statusbar_reaper/statusbar_reaper_40.png",
    "./img/statusbars/statusbar_reaper/statusbar_reaper_60.png",
    "./img/statusbars/statusbar_reaper/statusbar_reaper_80.png",
    "./img/statusbars/statusbar_reaper/statusbar_reaper_100.png",
  ];

  constructor() {
    super();
    this.loadImages(this.REAPER_HEALTH);
    this.positionX = 30;
    this.positionY = 20;
    this.width = 200;
    this.height = 60;
    this.setPercentage(this.percentage);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.REAPER_HEALTH[this.resolveImageIndex()];
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
