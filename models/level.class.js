class Level {
  enemies;
  ghosts;
  backgroundObjects;
  foregroundObjects;
  skulls;
  levelEndX = 2800;

  constructor(enemies, ghosts, backgroundObjects, foregroundObjects, skulls) {
    this.enemies = enemies;
    this.ghosts = ghosts;
    this.backgroundObjects = backgroundObjects;
    this.foregroundObjects = foregroundObjects;
    this.skulls = skulls;
  }
}
