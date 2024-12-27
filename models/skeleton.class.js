class Skeleton extends MovableObject {
  constructor() {
    super().loadImage("./img/skeleton/Idle/0_Skeleton_Warrior_Idle_000.png");
    this.positionX = 50 + Math.random() * 500;
  }
}
