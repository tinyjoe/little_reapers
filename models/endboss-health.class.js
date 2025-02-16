class EndbossHealth extends DrawableObject {
  percentage = 100;
  ENDBOSS_HEALTH = [
    "./img/statusbars/statusbar_endboss/statusbar_endboss_0.png",
    "./img/statusbars/statusbar_endboss/statusbar_endboss_20.png",
    "./img/statusbars/statusbar_endboss/statusbar_endboss_40.png",
    "./img/statusbars/statusbar_endboss/statusbar_endboss_60.png",
    "./img/statusbars/statusbar_endboss/statusbar_endboss_80.png",
    "./img/statusbars/statusbar_endboss/statusbar_endboss_100.png",
  ];

  /**
   * Represents a health bar for the endboss.
   * @constructor
   */
  constructor() {
    super();
    this.loadImages(this.ENDBOSS_HEALTH);
    this.positionX = 730;
    this.positionY = 20;
    this.width = 200;
    this.height = 60;
    this.setPercentage(this.percentage);
  }

  /**
   * Sets the percentage of the health of the endboss and shows the right image.
   * @param {int} percentage - The percentage of the health of the endboss.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.ENDBOSS_HEALTH[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Returns the index of the image which should be shown at a certain health state of the endboss.
   */
  resolveImageIndex() {
    if (this.percentage == 100) return 5;
    else if (this.percentage > 80) return 4;
    else if (this.percentage > 60) return 3;
    else if (this.percentage > 40) return 2;
    else if (this.percentage > 20) return 1;
    else return 0;
  }
}
