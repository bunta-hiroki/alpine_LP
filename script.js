

const openNavBtn = document.querySelector('.openNavBtn')
const nav = document.querySelector('.nav')
const banner = document.querySelector('.banner')
const questionOpenButtons = document.querySelectorAll('.questionOpenButtons')
const questionOpenButtonMinus = document.querySelectorAll('.questionOpenButtonMinus')
const questionOpenButton = document.querySelectorAll('.questionOpenButton')
const questionWraps = document.querySelectorAll('.questionWrap')
const answers = document.querySelectorAll('.answer')

const questionWrap = document.querySelectorAll('.questionWrap')

const feature = document.querySelector('.feature')

openNavBtn.addEventListener('click', function() {
  nav.classList.toggle('open')
  openNavBtn.classList.toggle('openNavBtnActive')
  banner.classList.toggle('bannerOff')
})

nav.addEventListener('click', function() {
  nav.classList.remove('open')
  openNavBtn.classList.remove('openNavBtnActive')
  banner.classList.remove('bannerOff')
})

questionWrap.forEach(el => {
  el.addEventListener('click', function(e) {
    e.target.lastElementChild.classList.toggle('questionOpen')
    e.target.classList.toggle('questionWrapActive')
    e.target.parentElement.lastElementChild.classList.toggle('answerOpen')
    e.target.parentElement.lastElementChild.firstElementChild.classList.toggle('answerTextOpen')
  })
});

const swiper = new Swiper('.swiper', {
  // direction: 'vertical',
  // loop: true,
  speed: 500,
  spaceBetween: 150,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  
});

