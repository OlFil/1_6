import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


const mediaQuery = window.matchMedia('(min-width: 768px)');
let slider = document.querySelectorAll('.swiper');


    const swiper = new Swiper(slider[0], {
       modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        grabCursor: true,
        mousewheel: {
            sensitivity: 1,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        }
    });

    const swiper1 = new Swiper(slider[1], {
      modules: [Pagination],
       slidesPerView: 'auto',
       spaceBetween: 16,
       pagination: {
           el: '.swiper-pagination',
           type: 'bullets',
           clickable: true,
       },
       grabCursor: true,
       mousewheel: {
           sensitivity: 1,
       },
       keyboard: {
           enabled: true,
           onlyInViewport: true,
           pageUpDown: true,
       }
   });

function handleTabletChange(e) {
  if (e.matches) {
    swiper.destroy();
    swiper1.destroy();
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);


/*
let swiperObjects = [];
const enableSwiper = function () {
  for (let i = 0; i < slider.length; i += 1) {
    swiperObjects[i] = new Swiper(slider[i], {
      slidesPerView: 2,
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
    console.log(swiperObjects[i]);
  }
};

let swiperRequest = function (MQL) {
  if (MQL.matches) {
    swiperObjects.forEach((el) => {
      if (el !== undefined) {
        el.destroy(true, true);
      }
    });
  } else {
    enableSwiper();
  }
};

swiperRequest(mediaQuery);

mediaQuery.onchange = function (a) {
  console.log(a);
  swiperRequest(mediaQuery);
};
*/