let canvas;
let world;
let keyboard = new Keyboard();
let gameScreen;
let startScreen;

function init() {
  canvas = document.getElementById("gameCanvas");
  gameScreen = document.getElementById("gamescreen");
  startScreen = document.getElementById("startscreen");
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  initLevel();
  world = new World(canvas, keyboard);
}

function showHelpDialog() {
  let overlay = document.getElementById("info-dialog");
  overlay.classList.remove("hidden");
  overlay.innerHTML += renderHelpDialog();
}

function closeHelpDialog() {
  let overlay = document.getElementById("info-dialog");
  overlay.classList.add("hidden");
  overlay.innerHTML = "";
}

function renderHelpDialog() {
  return `<div class="overlayContent">
        <div class="infoDialog">
          <h3>How to play</h3>
          <div class="keyInfoRow">
            <div class="infoContent">
              <img
                class="moveButton"
                src="./img/elements/buttons_move_reaper.png"
              />
              <p class="infoText">Move Reaper</p>
            </div>
            <div class="infoContent">
              <img class="keyButton" src="./img/elements/button_space.png" />
              <p class="infoText">Jump</p>
            </div>
            <div class="infoContent">
              <img class="keyButton" src="./img/elements/button_shift.png" />
              <p class="infoText">Throw bottles</p>
            </div>
          </div>
        </div>
        <button onclick="closeHelpDialog()" class="closeButton">
        </button>
      </div>
      `;
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
