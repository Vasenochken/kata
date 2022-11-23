import "@babel/polyfill";
import '../index.html';
import '../scss/index.scss';
import '../scss/swiper/swiper.scss';
import './script';

import Swiper, { Navigation, Pagination } from 'swiper';

const btOpen = document.querySelector('.button.button--icon-burger');
const btClose = document.querySelector('.button.button--icon-close');
const main = document.querySelector('.container');
const mobileMenu = document.querySelector('.mobile-menu');

let windowWidth = screen.width;
if (windowWidth >= 320 && windowWidth <= 600) {

  // const btOpen = document.querySelector('.button.button--icon-burger');
  // const btClose = document.querySelector('.button.button--icon-close');
  // const main = document.querySelector('.container');
  // const mobileMenu = document.querySelector('.mobile-menu');

  btOpen.onclick = function () {
    main.classList.add('hide');
    mobileMenu.classList.remove('hide');
  };

  btClose.onclick = function () {
    main.classList.remove('hide');
    mobileMenu.classList.add('hide');
  };

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

}
console.log(windowWidth);
let brandsList = document.querySelector('.swiper-wrapper');
let list = brandsList.querySelectorAll('.brands-slide');
const buttonView = document.querySelector('.button-viewmore');
console.log(brandsList);
console.log(list);
console.log(buttonView);

// if (windowWidth > 600 && windowWidth <= 1119) {     
//   for (let i = 6; i < list.length; i++) {
//       list[i].classList.add('hide');
//  }
// }
// if (windowWidth > 1119 && windowWidth <= 1920) {     
//   for (let i = 8; i < list.length; i++) {
//       list[i].classList.add('hide');
//  }
// }

if (windowWidth > 600 && windowWidth <= 1119) {


btOpen.onclick = function () {
  mobileMenu.classList.remove('hide');
};

btClose.onclick = function () {
  mobileMenu.classList.add('hide');
};

for (let i = 6; i < list.length; i++) {
      list[i].classList.add('hide');
}
buttonView.addEventListener('click', function () {

     if (!buttonView.classList.contains('close') ) {
         buttonView.textContent = 'Скрыть';
         buttonView.classList.add('close');

         for (let i = 6; i < list.length; i++) {
            list[i].classList.remove('hide');
         }
     }
     else {
         buttonView.classList.remove('close');
         buttonView.textContent = 'Показать всё';

         for (let i = 6; i < list.length; i++) {
             list[i].classList.add('hide');
         }
     }
});
}

if (windowWidth > 1119 && windowWidth <= 1920) {

mobileMenu.classList.remove('hide');

  for (let i = 8; i < list.length; i++) {
      list[i].classList.add('hide');
 }
buttonView.addEventListener('click', function () {

     if (!buttonView.classList.contains('close') ) {
         buttonView.textContent = 'Скрыть';
         buttonView.classList.add('close');

         for (let i = 8; i < list.length; i++) {
            list[i].classList.remove('hide');
         }
     }
     else {
         buttonView.classList.remove('close');
         buttonView.textContent = 'Показать всё';

         for (let i = 8; i < list.length; i++) {
             list[i].classList.add('hide');
         }
     }
});
}
