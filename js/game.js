let canvas;
let world;
let keyboard = new Keyboard();
let isMuted = false;
let gameScreen;
let startScreen;
let isGameOver;
let isGameWon;

function init(screenId) {
  canvas = document.getElementById("gameCanvas");
  gameScreen = document.getElementById("gamescreen");
  startScreen = document.getElementById(screenId);
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  initLevel();
  world = new World(canvas, keyboard);
  backgroundSound.play();
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
          <h2>How to play</h2>
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
  if (event.keyCode === 27) {
    keyboard.ESC = true;
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
  if (event.keyCode === 27) {
    keyboard.ESC = false;
  }
});

function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

function enterFullscreen() {
  canvas = document.getElementById("gameCanvas");
  requestFullscreen(canvas);
}

function muteAllSounds(soundOffId, soundOnId) {
  let soundOffButton = document.getElementById(soundOffId);
  let soundOnButton = document.getElementById(soundOnId);
  SOUND_EFFECTS.forEach((s) => {
    s.muted = true;
  });
  soundOffButton.classList.add("hidden");
  soundOnButton.classList.remove("hidden");
}

function unmuteAllSounds(soundOnId, soundOffId) {
  let soundOffButton = document.getElementById(soundOffId);
  let soundOnButton = document.getElementById(soundOnId);
  SOUND_EFFECTS.forEach((s) => {
    s.muted = false;
  });
  soundOffButton.classList.remove("hidden");
  soundOnButton.classList.add("hidden");
}

function mobileMoveRight() {
  world.reaper.moveRight();
}
