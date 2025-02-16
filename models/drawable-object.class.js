class DrawableObject {
  img;
  positionX = 0;
  positionY = 150;
  height = 200;
  width = 200;
  imageCache = {};
  currentImage = 0;

  /**
   * Loads an image of the character.
   * @param {string} path - The URL of the image.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Loads an array of images.
   * @param {Array} arr - The array of image URLs.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
