const carouselGalerie = document.getElementById('carousel-galerie');
const imagesGalerie = carouselGalerie.querySelectorAll('img');
const galerieBtnOne = document.querySelector('.galerie-btn-one');
const galerieBtnTwo = document.querySelector('.galerie-btn-two');
const galerieBtnThree = document.querySelector('.galerie-btn-three');

let currentIndex = 0;

function showImages(startIndex) {
  for (let i = 0; i < imagesGalerie.length; i++) {
    if (i >= startIndex && i < startIndex + 4) {
      imagesGalerie[i].classList.add('visible');
    } else {
      imagesGalerie[i].classList.remove('visible');
    }
  }
}

showImages(currentIndex);

galerieBtnOne.addEventListener('click', () => {
    galerieBtnOne.classList.add('active');
    galerieBtnTwo.classList.remove('active');
    galerieBtnThree.classList.remove('active');
    currentIndex = 0;
    showImages(currentIndex);
});

galerieBtnTwo.addEventListener('click', () => {
    galerieBtnOne.classList.remove('active');
    galerieBtnTwo.classList.add('active');
    galerieBtnThree.classList.remove('active');
    currentIndex = 4;
    showImages(currentIndex);
});

galerieBtnThree.addEventListener('click', () => {
    galerieBtnOne.classList.remove('active');
    galerieBtnTwo.classList.remove('active');
    galerieBtnThree.classList.add('active');
    currentIndex = 8;
    showImages(currentIndex);
});