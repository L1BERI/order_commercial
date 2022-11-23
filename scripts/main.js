


// BURGER-MENU
let burger = document.querySelector('.burger');
let header = document.querySelector('.header_top-bottom');
let bodyForScroll = document.querySelector('body')
burger.addEventListener('click', function (e) {
  burger.classList.toggle('burger-active');
  header.classList.toggle('header-active');
  e.preventDefault();
  if (burger.classList.contains('burger-active')) {
    bodyForScroll.style.overflow = 'hidden';
  } else {
    bodyForScroll.style.overflow = 'visible';
  }
})


// ACCORDEON



let accordItem = document.querySelectorAll('.accordeon__item');

accordItem.forEach(function(el){
  el.addEventListener('click', function(){
    if(el.classList.contains('active')){
      el.classList.remove('active');
    } else {
      el.classList.add('active');
    }
  })
})

// SLIDERS
new Swiper('.news-swiper', {


  watchOverflow: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
      simulateTouch: true,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 24,
      simulateTouch: true,
      pagination: {
        el: '.swiper-pagination',
      },

    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      simulateTouch: false,
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 24,
      simulateTouch: false,
    },

  },
});

new Swiper('.questions__swiper', {

  // watchOverflow: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
      simulateTouch: true,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 24,
      simulateTouch: true,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      simulateTouch: false,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 24,
    }

  },
});
new Swiper('.services__cards', {

  // watchOverflow: false,
  breakpoints: {
    315: {
      slidesPerView: 1,
      spaceBetween: 24,
      simulateTouch: true,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 24,
      simulateTouch: true,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
      simulateTouch: false,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 24,
    }

  },
});