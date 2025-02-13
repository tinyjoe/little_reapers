let allGameInterval = [];

function setStoppableInterval(fn, time) {
  let intervalId = setInterval(fn, time);
  allGameInterval.push(intervalId);
}
