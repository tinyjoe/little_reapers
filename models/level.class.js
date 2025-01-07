class Level {
  enemies;
  ghosts;
  backgroundObjects;
  foregroundObjects;
  levelEndX = 1870;

  constructor(enemies, ghosts, backgroundObjects, foregroundObjects) {
    this.enemies = enemies;
    this.ghosts = ghosts;
    this.backgroundObjects = backgroundObjects;
    this.foregroundObjects = foregroundObjects;
  }
}
