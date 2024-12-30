class Skeleton extends MovableObject {
  constructor() {
    super().loadImage(
      "./img/skeleton/Walking/0_Skeleton_Warrior_Walking_000.png"
    );
    this.positionX = 50 + Math.random() * 500;
  }
}
