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
  IMAGES_DYING = [
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_000.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_001.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_002.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_003.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_004.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_005.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_006.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_007.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_008.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_009.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_010.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_011.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_012.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_013.png",
    "./img/reaper_man/Dying/0_Reaper_Man_Dying_014.png",
  ];
  IMAGES_HURTING = [
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_000.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_001.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_002.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_003.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_004.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_005.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_006.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_007.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_008.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_009.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_010.png",
    "./img/reaper_man/Hurt/0_Reaper_Man_Hurt_011.png",
  ];
  speed = 0.75;
  offsetY = 150;
  offsetX = 150;

  walking_sound = new Audio("audio/reaper_walking.wav");

  constructor() {
    super().loadImage("./img/reaper_man/Idle/0_Reaper_Man_Idle_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DYING);
    this.loadImages(this.IMAGES_HURTING);
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
        this.moveRight();
        this.walking_sound.play();
      }
      if (this.world.keyboard.LEFT && this.positionX > 0) {
        this.moveLeft();
        this.walking_sound.play();
      }
      if (
        this.world.keyboard.JUMP &&
        !this.isAboveGround() &&
        !this.otherDirection &&
        this.positionX < this.world.level.levelEndX
      ) {
        this.speedY = 25;
        //this.jump();
      }
      if (
        this.world.keyboard.JUMP &&
        !this.isAboveGround() &&
        this.otherDirection &&
        this.positionX > 100
      ) {
        this.speedY = 25;
        //this.jump();
      }
      this.world.cameraX = -this.positionX + 30;
    }, 1000 / 100);

    setInterval((r) => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DYING);
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURTING);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 40);
  }

  jump() {}
}
