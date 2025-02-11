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
  IMAGES_SPAWNING = [
    "./img/endboss/Taunt/Minotaur_03_Taunt_000.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_001.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_002.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_003.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_004.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_005.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_006.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_007.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_008.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_009.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_010.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_011.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_012.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_013.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_014.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_015.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_016.png",
    "./img/endboss/Taunt/Minotaur_03_Taunt_017.png",
  ];
  IMAGES_HURTING = [
    "./img/endboss/Hurt/Minotaur_03_Hurt_000.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_001.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_002.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_003.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_004.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_005.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_006.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_007.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_008.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_009.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_010.png",
    "./img/endboss/Hurt/Minotaur_03_Hurt_011.png",
  ];
  IMAGES_DYING = [
    "./img/endboss/Dying/Minotaur_03_Dying_000.png",
    "./img/endboss/Dying/Minotaur_03_Dying_001.png",
    "./img/endboss/Dying/Minotaur_03_Dying_002.png",
    "./img/endboss/Dying/Minotaur_03_Dying_003.png",
    "./img/endboss/Dying/Minotaur_03_Dying_004.png",
    "./img/endboss/Dying/Minotaur_03_Dying_005.png",
    "./img/endboss/Dying/Minotaur_03_Dying_006.png",
    "./img/endboss/Dying/Minotaur_03_Dying_007.png",
    "./img/endboss/Dying/Minotaur_03_Dying_008.png",
    "./img/endboss/Dying/Minotaur_03_Dying_009.png",
    "./img/endboss/Dying/Minotaur_03_Dying_010.png",
    "./img/endboss/Dying/Minotaur_03_Dying_011.png",
    "./img/endboss/Dying/Minotaur_03_Dying_012.png",
    "./img/endboss/Dying/Minotaur_03_Dying_013.png",
    "./img/endboss/Dying/Minotaur_03_Dying_014.png",
  ];

  width = 400;
  height = 300;
  positionY = 220;
  positionX = 2600;
  hadFirstContact = false;
  endbossInterval;

  constructor() {
    super().loadImage("./img/endboss/Idle/Minotaur_03_Idle_000.png");
    this.speed = 1.25;
    this.loadImages(this.IMAGES_SPAWNING);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURTING);
    this.loadImages(this.IMAGES_DYING);
    this.animate();
    allGameInterval.push(this.endbossInterval);
  }

  animate() {
    this.endbossInterval = setInterval(() => {
      if (this.isEndbossSpawning()) this.spawningAnimation();
      else if (this.isHurt()) this.hurtingAnimation();
      else if (this.isDead()) this.dyingAnimation();
      else this.walkingAnimation();
    }, 50);
  }

  isEndbossSpawning() {
    return world.reaper.positionX > 2500 && !this.hadFirstContact;
  }

  spawningAnimation() {
    this.playAnimation(this.IMAGES_SPAWNING);
    this.hadFirstContact = true;
  }

  hurtingAnimation() {
    this.playAnimation(this.IMAGES_HURTING);
    enemyHurt.play();
  }

  dyingAnimation() {
    this.playAnimationOnce(this.IMAGES_DYING);
    this.disappear(this);
    endbossDyingSound.play();
    isGameWon = true;
    world.endGame();
  }

  walkingAnimation() {
    this.playAnimation(this.IMAGES_WALKING);
    this.moveLeft();
    walkingSound.play();
  }
}
