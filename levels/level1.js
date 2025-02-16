let backgroundObjects = [];
let foregroundObjects = [];
let enemies = [];
let backgroundGhosts = [];
let reaperCoins = [];
let level1;

/**
 * Initiates the first level of the game.
 */
function initLevel() {
  level1 = new Level(
    setEnemies(),
    setBackgroundGhosts(),
    setBackgroundObjects(),
    setForegroundObjects(),
    setReaperCoins()
  );
  localStorage.setItem("GameSounds", JSON.stringify(SOUND_EFFECTS));
}

/**
 * Resets the level objects and elements.
 */
function clearLevel() {
  backgroundObjects = [];
  foregroundObjects = [];
  enemies = [];
  backgroundGhosts = [];
  reaperCoins = [];
  localStorage.removeItem("GameSounds");
}

/**
 * Builds the game background with different layers.
 */
function setBackgroundObjects() {
  for (let i = -50; i < 3030; i += 958) {
    backgroundObjects.push(
      new Background("./img/game_background/layers/1.png", i),
      new Background("./img/game_background/layers/2.png", i),
      new Background("./img/game_background/layers/3.png", i),
      new Background("./img/game_background/layers/4.png", i),
      new Background("./img/game_background/layers/5.png", i)
    );
  }
  return backgroundObjects;
}

/**
 * Builds the game background that appears in front of other objects with different layers.
 */
function setForegroundObjects() {
  for (let i = -50; i < 3030; i += 958) {
    foregroundObjects.push(
      new Background("./img/game_background/layers/6.png", i),
      new Background("./img/game_background/layers/7.png", i),
      new Background("./img/game_background/layers/8.png", i),
      new Background("./img/game_background/layers/9.png", i)
    );
  }
  return foregroundObjects;
}

/**
 * Builds the count of enemies and the endboss of the game.
 */
function setEnemies() {
  for (let i = 0; i <= 7; i++) {
    enemies.push(new Skeleton());
  }
  enemies.push(new Endboss());
  return enemies;
}

/**
 * Builds the count of ghosts which are displayed in the background.
 */
function setBackgroundGhosts() {
  for (let i = 0; i <= 7; i++) {
    backgroundGhosts.push(new Ghost());
  }
  return backgroundGhosts;
}

/**
 * Builds the count of coins which can be collected in the game.
 */
function setReaperCoins() {
  for (let i = 0; i <= 14; i++) {
    reaperCoins.push(new Coin());
  }
  return reaperCoins;
}
