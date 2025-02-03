class Skeleton extends MovableObject {
  IMAGES_WALKING = [
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_000.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_001.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_002.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_003.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_004.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_005.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_006.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_007.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_008.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_009.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_010.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_011.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_012.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_013.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_014.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_015.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_016.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_017.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_018.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_019.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_020.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_021.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_022.png",
    "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_023.png",
  ];
  height = 150;
  width = 150;
  positionY = 370;
  offsetY = 40;
  offsetX = 40;

  constructor() {
    super().loadImage(
      "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_000.png"
    );
    this.positionX = 300 + Math.random() * 2500;
    this.speed = 0.15 + Math.random() * 0.25;
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 10);
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 60);
  }
}
