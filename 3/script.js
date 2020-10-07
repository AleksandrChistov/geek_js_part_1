// 3. *Добавить в галерею функцию перехода к следующему изображению.
// По сторонам от большой картинки должны быть стрелки «вперед» и «назад»,
// по нажатию на которые происходит замена изображения на следующее или предыдущее.

class Slider {
  constructor(images) {
    this.images = images;
    this.init();
  }

  init() {
    this.currentIndex = 0;
    this.currentImg = document.createElement('img');
    this.currentImg.onerror = () => this.errorHandler();
    this.currentImg.src = this.images[this.currentIndex].src;
    this.currentImg.alt = this.images[this.currentIndex].alt;
    const container = document.querySelector('.photo-container');
    container.append(this.currentImg);
  }

  previousImage() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
    this.showImage();
  }

  nextImage() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.showImage();
  }

  showImage() {
    this.currentImg.src = this.images[this.currentIndex].src;
    this.currentImg.alt = this.images[this.currentIndex].alt;
  }

  errorHandler() {
    this.currentImg.src = 'img/not-found.jpg';
    this.currentImg.alt = 'Default image';
  }
}

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const slider = new Slider(images);

leftArrow.addEventListener('click', () => slider.previousImage());
rightArrow.addEventListener('click', () => slider.nextImage());
