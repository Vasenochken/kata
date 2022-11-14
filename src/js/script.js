
export const mult = (a, b) => a * b;
export const sum = async(a, b) => a + b;

// const buttonView = document.querySelector('.test');
// let brandsList = document.querySelector('.brands__list');
// let list = brandsList.querySelectorAll('li');
// let windowWidth = screen.width;


// if (windowWidth >= 320 && windowWidth <= 600) {

//     const slider = document.querySelector('.swiper');
    
//     const swiper = new Swiper(slider, { 
//         slidesPerView: 1,
//         spaceBetween: 20,
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//           },
//       });
    
//     }




// if (windowWidth >= 600 && windowWidth <= 1119) {     
//      for (let i = 6; i < list.length; i++) {
//          list[i].classList.add('hide');
//     }


//     buttonView.addEventListener('click', function () {
//         if (!buttonView.classList.contains('close') ) {
//             buttonView.textContent = 'Скрыть';
//             buttonView.classList.add('close');

//             for (let i = 6; i < list.length; i++) {
//                list[i].classList.remove('hide');
//             }
//         }
//         else {
//             buttonView.classList.remove('close');
//             buttonView.textContent = 'Показать всё';

//             for (let i = 6; i < list.length; i++) {
//                 list[i].classList.add('hide');
//             }
//         }
// });
// }

// if (windowWidth >= 1120 && windowWidth <= 1920) {     
//     for (let i = 8; i < list.length; i++) {
//         list[i].classList.add('hide');
//     }

//     buttonView.addEventListener('click', function () {
//         if (!buttonView.classList.contains('close') ) {
//                 buttonView.textContent = 'Скрыть';
//                 buttonView.classList.add('close');

//                 for (let i = 8; i < list.length; i++) {
//                         list[i].classList.remove('hide');
//                 }
//     }
//         else {
//                 buttonView.classList.remove('close');
//                 buttonView.textContent = 'Показать всё';
//                 for (let i = 8; i < list.length; i++) {
//                         list[i].classList.add('hide');
//                 }
//     }
// });
// }