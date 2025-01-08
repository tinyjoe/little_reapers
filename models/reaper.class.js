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
  IMAGES_JUMPING = [
    "./img/reaper_man/Jump Start/0_Reaper_Man_Jump Start_000.png",
    "./img/reaper_man/Jump Start/0_Reaper_Man_Jump Start_001.png",
    "./img/reaper_man/Jump Start/0_Reaper_Man_Jump Start_002.png",
    "./img/reaper_man/Jump Start/0_Reaper_Man_Jump Start_003.png",
    "./img/reaper_man/Jump Start/0_Reaper_Man_Jump Start_004.png",
    "./img/reaper_man/Jump Start/0_Reaper_Man_Jump Start_005.png",
    "./img/reaper_man/Falling Down/0_Reaper_Man_Falling Down_000.png",
    "./img/reaper_man/Falling Down/0_Reaper_Man_Falling Down_001.png",
    "./img/reaper_man/Falling Down/0_Reaper_Man_Falling Down_002.png",
    "./img/reaper_man/Falling Down/0_Reaper_Man_Falling Down_003.png",
    "./img/reaper_man/Falling Down/0_Reaper_Man_Falling Down_004.png",
    "./img/reaper_man/Falling Down/0_Reaper_Man_Falling Down_005.png",
  ];
  speed = 0.75;

  walking_sound = new Audio("audio/reaper_walking.wav");

  constructor() {
    super().loadImage("./img/reaper_man/Idle/0_Reaper_Man_Idle_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      if (
        this.world.keyboard.RIGHT &&
        this.positionX < this.world.level.levelEndX
      ) {
        this.positionX += this.speed;
        this.otherDirection = false;
        this.walking_sound.play();
      }
      if (this.world.keyboard.LEFT && this.positionX > 0) {
        this.positionX -= this.speed;
        this.otherDirection = true;
        this.walking_sound.play();
      }
      if (this.world.keyboard.UP) {
        this.speedY = 20;
      }
      this.world.cameraX = -this.positionX + 30;
    }, 1000 / 100);

    setInterval((r) => {
      if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 60);
  }

  jump() {}
}
