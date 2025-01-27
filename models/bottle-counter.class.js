class BottleCounter extends DrawableObject {
  BOTTLE_COUNTER = [
    "./img/counters/counter_bottle/counter_bottle_0.png",
    "./img/counters/counter_bottle/counter_bottle_1.png",
    "./img/counters/counter_bottle/counter_bottle_2.png",
    "./img/counters/counter_bottle/counter_bottle_3.png",
    "./img/counters/counter_bottle/counter_bottle_4.png",
    "./img/counters/counter_bottle/counter_bottle_5.png",
    "./img/counters/counter_bottle/counter_bottle_6.png",
    "./img/counters/counter_bottle/counter_bottle_7.png",
    "./img/counters/counter_bottle/counter_bottle_8.png",
    "./img/counters/counter_bottle/counter_bottle_9.png",
    "./img/counters/counter_bottle/counter_bottle_10.png",
  ];

  constructor(count) {
    super();
    this.loadImages(this.BOTTLE_COUNTER);
    this.positionX = 280;
    this.positionY = 20;
    this.width = 150;
    this.height = 60;
    this.setCounter(count);
  }

  setCounter(count) {
    let path = this.BOTTLE_COUNTER[count];
    this.img = this.imageCache[path];
  }
}
