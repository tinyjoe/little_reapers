class Level {
  enemies;
  ghosts;
  backgroundObjects;
  foregroundObjects;
  coins;
  levelEndX = 2800;

  /**
   * Represents a level of the game.
   * @constructor
   * @param {Array} enemies - The array of enemies which appear in the game.
   * @param {Array} ghosts - The array of ghosts which appear in the background.
   * @param {Array} backgroundObject - The array of background layers which build the game background.
   * @param {Array} foregroundObjects - The array of background layers which build the game background in front of the ghosts.
   * @param {Array} coins - The array of coins which appear in the game.
   */
  constructor(enemies, ghosts, backgroundObjects, foregroundObjects, coins) {
    this.enemies = enemies;
    this.ghosts = ghosts;
    this.backgroundObjects = backgroundObjects;
    this.foregroundObjects = foregroundObjects;
    this.coins = coins;
  }
}
