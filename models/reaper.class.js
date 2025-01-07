class Reaper extends MovableObject {
  world;
  IMAGES_WALKING = [
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_000.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_001.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_002.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_003.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_004.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_005.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_006.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_007.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_008.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_009.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_010.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_011.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_012.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_013.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_014.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_015.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_016.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_017.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_018.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_019.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_020.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_021.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_022.png",
    "./img/reaper_man/Walking/0_Reaper_Man_Walking_023.png",
  ];
  currentImage = 0;
  speed = 0.75;

  constructor() {
    super().loadImage("./img/reaper_man/Walking/0_Reaper_Man_Walking_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval((r) => {
      if (
        this.world.keyboard.RIGHT &&
        this.positionX < this.world.level.levelEndX
      ) {
        this.positionX += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.positionX > 0) {
        this.positionX -= this.speed;
        this.otherDirection = true;
      }
      this.world.cameraX = -this.positionX + 30;
    }, 1000 / 80);

    setInterval((r) => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        let index = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[index];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 60);
  }

  jump() {}
}
