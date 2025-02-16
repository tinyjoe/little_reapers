let allGameInterval = [];

/**
 * Creates an interval and pushes that interval to an array.
 * @param {Function} fn - The function which should be set in the interval.
 * @param {int} time - The time interval in milliseconds.
 */
function setStoppableInterval(fn, time) {
  let intervalId = setInterval(fn, time);
  allGameInterval.push(intervalId);
}
