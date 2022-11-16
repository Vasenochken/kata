import "@babel/polyfill";
import '../index.html';
import '../scss/index.scss';
import '../scss/swiper/swiper.scss';


  // import Swiper JS
  // import Swiper styles
//   import 'swiper/css';
//   import 'swiper/css/navigation';
//   import 'swiper/css/pagination';

  import Swiper, { Navigation, Pagination } from 'swiper';

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    // autoHeight: true,
    loop: true,
    spaceBetween: 16,
    slidesPerGroup: 1,
    // If we need pagination
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });