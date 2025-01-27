class Level {
  enemies;
  ghosts;
  backgroundObjects;
  foregroundObjects;
  coins;
  levelEndX = 2800;

  constructor(enemies, ghosts, backgroundObjects, foregroundObjects, coins) {
    this.enemies = enemies;
    this.ghosts = ghosts;
    this.backgroundObjects = backgroundObjects;
    this.foregroundObjects = foregroundObjects;
    this.coins = coins;
  }
}
