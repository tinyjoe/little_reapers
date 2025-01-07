let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("gameCanvas");
  world = new World(canvas, keyboard);
}

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) {
    keyboard.RIGHT = true;
  }

  if (event.keyCode === 37) {
    keyboard.LEFT = true;
  }

  if (event.keyCode === 38) {
    keyboard.UP = true;
  }

  if (event.keyCode === 40) {
    keyboard.DOWN = true;
  }

  if (event.keyCode === 32) {
    keyboard.JUMP = true;
  }

  if (event.keyCode === 16) {
    keyboard.THROW = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 39) {
    keyboard.RIGHT = false;
  }

  if (event.keyCode === 37) {
    keyboard.LEFT = false;
  }

  if (event.keyCode === 38) {
    keyboard.UP = false;
  }

  if (event.keyCode === 40) {
    keyboard.DOWN = false;
  }

  if (event.keyCode === 32) {
    keyboard.JUMP = false;
  }

  if (event.keyCode === 16) {
    keyboard.THROW = false;
  }
});
