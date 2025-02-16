let canvas;
let world;
let keyboard = new Keyboard();
let isMuted = false;
let gameScreen;
let startScreen;
let isGameOver;
let isGameWon;

/**
 * Starts a new game.
 * @param {string} screenId - The ID of the start screen which should be hidden.
 */
function init(screenId) {
  canvas = document.getElementById("gameCanvas");
  gameScreen = document.getElementById("gamescreen");
  startScreen = document.getElementById(screenId);
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  isGameOver = false;
  isGameWon = false;
  initLevel();
  world = new World(canvas, keyboard);
  backgroundSound.play();
}

/**
 * Opens a dialog with the instructions on how to play the game.
 */
function showHelpDialog() {
  let overlay = document.getElementById("info-dialog");
  overlay.classList.remove("hidden");
  overlay.innerHTML += renderHelpDialog();
}

/**
 * Closes the dialog with the instructions on how to play the game.
 */
function closeHelpDialog() {
  let overlay = document.getElementById("info-dialog");
  overlay.classList.add("hidden");
  overlay.innerHTML = "";
}

/**
 * Template function of the help dialog
 */
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
              <img class="keyButton" src="./img/elements/button_shift_02.png" />
              <p class="infoText">Throw bottles</p>
            </div>
          </div>
        </div>
        <button onclick="closeHelpDialog()" class="closeButton">
        </button>
      </div>
      `;
}

/**
 * Event listener when specific keys are pressed.
 */
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) keyboard.RIGHT = true;
  if (event.keyCode === 37) keyboard.LEFT = true;
  if (event.keyCode === 38) keyboard.UP = true;
  if (event.keyCode === 40) keyboard.DOWN = true;
  if (event.keyCode === 32) keyboard.JUMP = true;
  if (event.keyCode === 16) keyboard.THROW = true;
  if (event.keyCode === 27) keyboard.ESC = true;
});

/**
 * Event listener when specific keys are released.
 */
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 39) keyboard.RIGHT = false;
  if (event.keyCode === 37) keyboard.LEFT = false;
  if (event.keyCode === 38) keyboard.UP = false;
  if (event.keyCode === 40) keyboard.DOWN = false;
  if (event.keyCode === 32) keyboard.JUMP = false;
  if (event.keyCode === 16) keyboard.THROW = false;
  if (event.keyCode === 27) keyboard.ESC = false;
});

/**
 * Event listener when touch event starts on mobile devices.
 */
document.addEventListener("touchstart", (e) => {
  let MOBILE_RIGHT = document.getElementById("mobileMoveRight");
  let MOBILE_LEFT = document.getElementById("mobileMoveLeft");
  let MOBILE_JUMP = document.getElementById("mobileJump");
  let MOBILE_THROW = document.getElementById("mobileThrow");
  if (e.target === MOBILE_RIGHT) keyboard.RIGHT = true;
  if (e.target === MOBILE_LEFT) keyboard.LEFT = true;
  if (e.target === MOBILE_THROW) keyboard.THROW = true;
  if (e.target === MOBILE_JUMP) keyboard.JUMP = true;
});

/**
 * Event listener when touch event ends on mobile devices.
 */
document.addEventListener("touchend", (e) => {
  let MOBILE_RIGHT = document.getElementById("mobileMoveRight");
  let MOBILE_LEFT = document.getElementById("mobileMoveLeft");
  let MOBILE_JUMP = document.getElementById("mobileJump");
  let MOBILE_THROW = document.getElementById("mobileThrow");
  if (e.target === MOBILE_RIGHT) keyboard.RIGHT = false;
  if (e.target === MOBILE_LEFT) keyboard.LEFT = false;
  if (e.target === MOBILE_THROW) keyboard.THROW = false;
  if (e.target === MOBILE_JUMP) keyboard.JUMP = false;
});

/**
 * Request the fullscreen options for different browsers.
 */
function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

/**
 * Enters fullscreen mode for game canvas.
 */
function enterFullscreen() {
  canvas = document.getElementById("gameCanvas");
  requestFullscreen(canvas);
}

/**
 * Mutes all sound effects of the game.
 * @param {string} soundOffId - The ID of the button, which is shown when the sound is on.
 * @param {string} soundOnId - The ID of the button, which is shown when the sound is off.
 */
function muteAllSounds(soundOffId, soundOnId) {
  let soundOffButton = document.getElementById(soundOffId);
  let soundOnButton = document.getElementById(soundOnId);
  SOUND_EFFECTS.forEach((s) => {
    s.muted = true;
  });
  soundOffButton.classList.add("hidden");
  soundOnButton.classList.remove("hidden");
}

/**
 * Unmutes all sound effects of the game.
 * @param {string} soundOnId - The ID of the button, which is shown when the sound is off.
 * @param {string} soundOffId - The ID of the button, which is shown when the sound is on.
 */
function unmuteAllSounds(soundOnId, soundOffId) {
  let soundOffButton = document.getElementById(soundOffId);
  let soundOnButton = document.getElementById(soundOnId);
  SOUND_EFFECTS.forEach((s) => {
    s.muted = false;
  });
  soundOffButton.classList.remove("hidden");
  soundOnButton.classList.add("hidden");
}
