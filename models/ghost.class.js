class Ghost extends MovableObject {
  /**
   * Represents a ghosts which appears in the background of the game.
   * @constructor
   */
  constructor() {
    super().loadImage("./img/game_background/layers/10.png");
    this.height = 150;
    this.width = 100;
    this.animate();
  }

  /**
   * Animates the ghost and sets the position of the ghost randomly.
   */
  animate() {
    setStoppableInterval(() => {
      this.positionY = Math.random() * 150;
      this.positionX = Math.random() * 2000;
    }, 2000);
  }
}
