const helloSlide = document.querySelector('.slide-1');
const helloSlidePcTxt = document.querySelector('.slidePcText');
const helloSlideMobTxt = document.querySelector('.slideMobText');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;
  if (scrollPos > 300) {
    helloSlide.classList.add('slidedSlide');
    helloSlidePcTxt.classList.add('colorInSlideNone');
    helloSlideMobTxt.classList.add('colorInSlideNone');
  }
  else {
    helloSlide.classList.remove('slidedSlide');
    helloSlidePcTxt.classList.remove('colorInSlideNone');
    helloSlideMobTxt.classList.remove('colorInSlideNone');
  }
})