class Endboss extends MovableObject {
  IMAGES_WALKING = [
    "./img/endboss/Walking/Minotaur_03_Walking_000.png",
    "./img/endboss/Walking/Minotaur_03_Walking_001.png",
    "./img/endboss/Walking/Minotaur_03_Walking_002.png",
    "./img/endboss/Walking/Minotaur_03_Walking_003.png",
    "./img/endboss/Walking/Minotaur_03_Walking_004.png",
    "./img/endboss/Walking/Minotaur_03_Walking_005.png",
    "./img/endboss/Walking/Minotaur_03_Walking_006.png",
    "./img/endboss/Walking/Minotaur_03_Walking_007.png",
    "./img/endboss/Walking/Minotaur_03_Walking_008.png",
    "./img/endboss/Walking/Minotaur_03_Walking_009.png",
    "./img/endboss/Walking/Minotaur_03_Walking_010.png",
    "./img/endboss/Walking/Minotaur_03_Walking_011.png",
    "./img/endboss/Walking/Minotaur_03_Walking_012.png",
    "./img/endboss/Walking/Minotaur_03_Walking_013.png",
    "./img/endboss/Walking/Minotaur_03_Walking_014.png",
    "./img/endboss/Walking/Minotaur_03_Walking_015.png",
    "./img/endboss/Walking/Minotaur_03_Walking_016.png",
    "./img/endboss/Walking/Minotaur_03_Walking_017.png",
  ];

  width = 400;
  height = 300;
  positionY = 220;
  positionX = 1800;

  constructor() {
    super().loadImage("./img/endboss/Idle/Minotaur_03_Idle_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval((r) => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 60);
  }
}
