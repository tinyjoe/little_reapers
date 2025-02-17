class CoinsCounter extends DrawableObject {
  COINS_COUNTER = [
    "./img/counters/counter_coins/counter_coins_00.png",
    "./img/counters/counter_coins/counter_coins_10.png",
    "./img/counters/counter_coins/counter_coins_20.png",
    "./img/counters/counter_coins/counter_coins_30.png",
    "./img/counters/counter_coins/counter_coins_40.png",
    "./img/counters/counter_coins/counter_coins_50.png",
    "./img/counters/counter_coins/counter_coins_60.png",
    "./img/counters/counter_coins/counter_coins_70.png",
    "./img/counters/counter_coins/counter_coins_80.png",
    "./img/counters/counter_coins/counter_coins_90.png",
    "./img/counters/counter_coins/counter_coins_100.png",
    "./img/counters/counter_coins/counter_coins_110.png",
    "./img/counters/counter_coins/counter_coins_120.png",
    "./img/counters/counter_coins/counter_coins_130.png",
    "./img/counters/counter_coins/counter_coins_140.png",
    "./img/counters/counter_coins/counter_coins_150.png",
    "./img/counters/counter_coins/counter_coins_160.png",
    "./img/counters/counter_coins/counter_coins_170.png",
    "./img/counters/counter_coins/counter_coins_180.png",
    "./img/counters/counter_coins/counter_coins_190.png",
    "./img/counters/counter_coins/counter_coins_200.png",
    "./img/counters/counter_coins/counter_coins_210.png",
    "./img/counters/counter_coins/counter_coins_220.png",
    "./img/counters/counter_coins/counter_coins_230.png",
    "./img/counters/counter_coins/counter_coins_240.png",
    "./img/counters/counter_coins/counter_coins_250.png",
    "./img/counters/counter_coins/counter_coins_260.png",
    "./img/counters/counter_coins/counter_coins_270.png",
    "./img/counters/counter_coins/counter_coins_280.png",
    "./img/counters/counter_coins/counter_coins_290.png",
    "./img/counters/counter_coins/counter_coins_300.png",
  ];

  /**
   * Represents a counter for the collected coins.
   * @constructor
   * @param {int} count - The amount of the collected coins.
   */
  constructor(count) {
    super();
    this.loadImages(this.COINS_COUNTER);
    this.positionX = 480;
    this.positionY = 20;
    this.width = 150;
    this.height = 60;
    this.setCounter(count);
  }

  /**
   * Set a counter according to the collected coins and shows the right image of the counter.
   * @param {int} count - The count of the collected coins.
   */
  setCounter(count) {
    let path = this.COINS_COUNTER[count];
    this.img = this.imageCache[path];
  }
}
