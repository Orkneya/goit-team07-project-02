import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const swiper = new Swiper('.about-skills-swiper', {
  slidesPerView: 6,
  slidesPerGroup: 1,
  loop: true,

  modules: [Navigation, Autoplay],

  navigation: {
    nextEl: '.about-skills-btn',
  },

  autoplay: {
    delay: 2000,
  },

  keyboard: {
    enabled: false,
  },

  mousewheel: {
    invert: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    swiper.slideNext();
  } else if (e.key === 'ArrowLeft') {
    swiper.slidePrev();
  }
});
