let canvas;
let world;

function init() {
  canvas = document.getElementById("gameCanvas");
  world = new World(canvas);
  console.log("My Character is", world.reaper);
  console.log("My Enemies are", world.enemies);
}
