// NAVBAR SCROLL
const header = document.querySelector('header');

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
});


//SLIDE BANNER
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}


// SLIDE GALERIE
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



//SLIDE AVIS CLIENT
const slidesAvis = document.querySelectorAll(".slide-avis");
let currentSlideAvis = 0;
const slideIntervalAvis = setInterval(nextSlideAvis, 5000);

function nextSlideAvis() {
  slidesAvis[currentSlideAvis].classList.remove("active");
  currentSlideAvis = (currentSlideAvis + 1) % slidesAvis.length;
  slidesAvis[currentSlideAvis].classList.add("active");
}



// ZOOM IMAGE

function clickZoom(element) {
  element.classList.add('img-clicked');
  document.getElementById('zoom').classList.add('zoom-clicked');
  console.log(element);
};

function closeZoom() {
  document.getElementById('zoom').classList.remove('zoom-clicked');
  document.querySelector('.img-clicked').classList.remove('img-clicked');
}