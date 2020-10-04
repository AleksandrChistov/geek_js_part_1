// 1. Доработать функцию замены картинки в галерее таким образом,
// чтобы она проверяла наличие картинки по указанному в src адресу.

const galleryElement = document.querySelector('.photo-gallery');
const mainPhotoElement = document.querySelector('.main-photo');

galleryElement.addEventListener('click', showBigImage);

function showBigImage(event) {
  const url = event.target.src;
  let newUrl = url.replace('small', 'big');

  if (mainPhotoElement.children.length) {
    const currentPhoto = mainPhotoElement.firstChild;
    currentPhoto.onerror = errorHandler;
    currentPhoto.setAttribute('src', newUrl);
  } else {
    const bigPhoto = document.createElement('img');
    bigPhoto.src = newUrl;
    bigPhoto.onerror = errorHandler;
    mainPhotoElement.append(bigPhoto);
  }
}

function errorHandler() {
  const currentPhoto = mainPhotoElement.firstChild;
  currentPhoto.setAttribute('src', 'img/not-found.jpg');
}
