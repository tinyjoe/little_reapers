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
  ];

  constructor(count) {
    super();
    this.loadImages(this.COINS_COUNTER);
    this.positionX = 480;
    this.positionY = 20;
    this.width = 150;
    this.height = 60;
    this.setCounter(count);
  }

  setCounter(count) {
    let path = this.COINS_COUNTER[count];
    this.img = this.imageCache[path];
  }
}
