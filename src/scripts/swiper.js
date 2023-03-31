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
            el: '.swiper-pagination1',
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
           el: '.swiper-pagination2',
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

   const swiper2 = new Swiper(slider[2], {
    modules: [Pagination],
     slidesPerView: 'auto',
     spaceBetween: 16,
     pagination: {
         el: '.swiper-pagination3',
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
    swiper2.destroy();
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
