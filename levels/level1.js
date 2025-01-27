let backgroundObjects = [];
let foregroundObjects = [];
let enemies = [];
let backgroundGhosts = [];
let reaperCoins = [];
let level1;

function initLevel() {
  level1 = new Level(
    setEnemies(),
    setBackgroundGhosts(),
    setBackgroundObjects(),
    setForegroundObjects(),
    setReaperCoins()
  );
}

function setBackgroundObjects() {
  for (let i = -50; i < 3030; i += 960) {
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

function setForegroundObjects() {
  for (let i = -50; i < 3030; i += 960) {
    foregroundObjects.push(
      new Background("./img/game_background/layers/6.png", i),
      new Background("./img/game_background/layers/7.png", i),
      new Background("./img/game_background/layers/8.png", i),
      new Background("./img/game_background/layers/9.png", i)
    );
  }
  return foregroundObjects;
}

function setEnemies() {
  for (let i = 0; i <= 7; i++) {
    enemies.push(new Skeleton());
  }
  enemies.push(new Endboss());
  return enemies;
}

function setBackgroundGhosts() {
  for (let i = 0; i <= 7; i++) {
    backgroundGhosts.push(new Ghost());
  }
  return backgroundGhosts;
}

function setReaperCoins() {
  for (let i = 0; i <= 14; i++) {
    reaperCoins.push(new Coin());
  }
  return reaperCoins;
}
