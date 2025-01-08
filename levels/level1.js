let backgroundObjects = [];
let foregroundObjects = [];

const level1 = new Level(
  [new Skeleton(), new Skeleton(), new Skeleton(), new Endboss()],
  [new Ghost(), new Ghost(), new Ghost()],
  setBackgroundObjects(),
  setForegroundObjects()
);

function setBackgroundObjects() {
  for (let i = -50; i < 1920; i += 960) {
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
  for (let i = -960; i < 2880; i += 960) {
    foregroundObjects.push(
      new Background("./img/game_background/layers/6.png", i),
      new Background("./img/game_background/layers/7.png", i),
      new Background("./img/game_background/layers/8.png", i),
      new Background("./img/game_background/layers/9.png", i)
    );
  }
  return foregroundObjects;
}
