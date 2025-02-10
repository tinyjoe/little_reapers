class Reaper extends MovableObject {
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
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_000.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_001.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_002.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_003.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_004.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_005.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_006.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_007.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_008.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_009.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_010.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Slashing_011.png",
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
  offsetY = 90;
  offsetX = 90;
  reaperInterval;
  reaperEffectsInterval;

  constructor() {
    super().loadImage("./img/reaper_man/Idle/0_Reaper_Man_Idle_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DYING);
    this.loadImages(this.IMAGES_HURTING);
    this.applyGravity();
    this.animate();
    allGameInterval.push(this.reaperInterval);
    allGameInterval.push(this.reaperEffectsInterval);
  }

  animate() {
    this.reaperInterval = setInterval(() => {
      walkingSound.pause();
      if (this.isReaperMovingRight()) {
        this.reaperWalking(this.moveRight());
      }
      if (this.isReaperMovingLeft()) {
        this.reaperWalking(this.moveLeft());
      }
      if (this.isReaperJumpingRight()) {
        this.reaperJumping();
      }
      if (this.isReaperJumpingLeft()) {
        this.reaperJumping();
      }
      if (this.world.keyboard.DOWN && this.isAboveGround()) {
        this.speedY = -25;
      }
      if (this.world.keyboard.DOWN && !this.isAboveGround()) {
        this.speedY = 0;
      }
      this.world.cameraX = -this.positionX + 30;
    }, 1000 / 100);

    this.reaperEffectsInterval = this.reaperAnimation();
  }

  isReaperMovingRight() {
    return (
      this.world.keyboard.RIGHT && this.positionX < this.world.level.levelEndX
    );
  }

  isReaperMovingLeft() {
    return (
      (this.world.keyboard.LEFT && this.positionX > 0) ||
      (this.world.mobileMoveLeft() && this.positionX > 0)
    );
  }

  isReaperJumpingLeft() {
    return (
      (this.world.keyboard.JUMP || this.world.keyboard.UP) &&
      !this.isAboveGround() &&
      this.otherDirection &&
      this.positionX > 100
    );
  }

  isReaperJumpingRight() {
    return (
      (this.world.keyboard.JUMP || this.world.keyboard.UP) &&
      !this.isAboveGround() &&
      !this.otherDirection &&
      this.positionX < this.world.level.levelEndX
    );
  }

  reaperWalking(direction) {
    direction;
    walkingSound.play();
  }

  reaperJumping() {
    this.jump();
    jumpingSound.play();
  }

  reaperDying() {
    this.playAnimationOnce(this.IMAGES_DYING);
    endbossDyingSound.play();
    isGameOver = true;
    this.world.endGame();
  }

  reaperHurting() {
    this.playAnimation(this.IMAGES_HURTING);
    reaperHurtSound.play();
  }

  isReaperMoving() {
    return (
      this.world.keyboard.RIGHT ||
      this.world.keyboard.LEFT ||
      this.world.mobileMoveLeft()
    );
  }

  reaperAnimation() {
    setInterval(() => {
      if (this.isDead()) {
        this.reaperDying();
      } else if (this.isHurt()) {
        this.reaperHurting();
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.isReaperMoving()) {
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 40);
  }

  jump() {
    this.speedY = 25;
  }
}
