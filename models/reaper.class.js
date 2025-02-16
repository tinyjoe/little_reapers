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
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_000.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_001.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_002.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_003.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_004.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_005.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_006.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_007.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_008.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_009.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_010.png",
    "./img/reaper_man/Jump/0_Reaper_Man_Kicking_011.png",
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

  /**
   * Represents the main character of the game.
   * @constructor
   */
  constructor() {
    super().loadImage("./img/reaper_man/Idle/0_Reaper_Man_Idle_000.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DYING);
    this.loadImages(this.IMAGES_HURTING);
    this.applyGravity();
    this.animate();
  }

  /**
   * Animates the reaper in different situations.
   */
  animate() {
    setStoppableInterval(() => {
      walkingSound.pause();
      this.reaperWalkingAnimation();
      this.reaperJumpingAnimation();
      this.reaperDownAnimation();
      this.world.cameraX = -this.positionX + 30;
    }, 1000 / 100);
    this.reaperAnimation();
  }

  /**
   * Defines animation of reaper when the down key is pressed.
   */
  reaperDownAnimation() {
    if (this.world.keyboard.DOWN && this.isAboveGround()) {
      this.speedY = -25;
    }
    if (this.world.keyboard.DOWN && !this.isAboveGround()) {
      this.speedY = 0;
    }
  }

  /**
   * Defines animation of reaper when the reaper is walking.
   */
  reaperWalkingAnimation() {
    if (this.isReaperMovingRight()) {
      this.reaperWalking(this.moveRight());
    } else if (this.isReaperMovingLeft()) {
      this.reaperWalking(this.moveLeft());
    }
  }

  /**
   * Defines animation of reaper when the reaper is jumping.
   */
  reaperJumpingAnimation() {
    if (this.isReaperJumpingRight()) {
      this.reaperJumping();
    }
    if (this.isReaperJumpingLeft()) {
      this.reaperJumping();
    }
  }

  /**
   * Checks if reaper is moving right.
   */
  isReaperMovingRight() {
    return (
      this.world.keyboard.RIGHT && this.positionX < this.world.level.levelEndX
    );
  }

  /**
   * Checks if reaper is moving left.
   */
  isReaperMovingLeft() {
    return this.world.keyboard.LEFT && this.positionX > 0;
  }

  /**
   * Checks if reaper is jumping left.
   */
  isReaperJumpingLeft() {
    return (
      (this.world.keyboard.JUMP || this.world.keyboard.UP) &&
      !this.isAboveGround() &&
      this.otherDirection &&
      this.positionX > 100
    );
  }

  /**
   * Checks if reaper is jumping right.
   */
  isReaperJumpingRight() {
    return (
      (this.world.keyboard.JUMP || this.world.keyboard.UP) &&
      !this.isAboveGround() &&
      !this.otherDirection &&
      this.positionX < this.world.level.levelEndX
    );
  }

  /**
   * Checks whether reaper is moving.
   */
  isReaperMoving() {
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
  }

  /**
   * Defines what happens when reaper is walking.
   */
  reaperWalking(direction) {
    direction;
    walkingSound.play();
  }

  /**
   * Defines what happens when reaper is jumping.
   */
  reaperJumping() {
    this.jump();
    jumpingSound.play();
  }

  /**
   * Defines animation of reaper when he is dying.
   */
  reaperDying() {
    this.playAnimationOnce(this.IMAGES_DYING);
    endbossDyingSound.play();
    isGameOver = true;
    this.world.endGame();
  }

  /**
   * Defines animation of reaper when he is hurtin.
   */
  reaperHurting() {
    this.playAnimation(this.IMAGES_HURTING);
    reaperHurtSound.play();
  }

  /**
   * Defines the animation of the reaper.
   */
  reaperAnimation() {
    setStoppableInterval(() => {
      if (this.isDead()) this.reaperDying();
      else if (this.isHurt()) this.reaperHurting();
      else if (this.isAboveGround()) this.playAnimation(this.IMAGES_JUMPING);
      else {
        if (this.isReaperMoving()) {
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 40);
  }

  /**
   * Makes the character jump.
   */
  jump() {
    this.speedY = 25;
  }
}
