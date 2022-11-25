const btnEnroll = document.querySelector('.button.button--icon-enroll');
const btnStatus = document.querySelector('.button.button--icon-status');
const btnCloseModal = document.querySelector('.button.button--icon-close-modal');
const btnCloseModalCall = document.querySelector('.button.button--icon-close-modal--call');
const modalWindow = document.querySelector('.modal-window');
const modalWindowCall = document.querySelector('.modal-window.call');
const btnLabelEnroll = document.querySelector('.label-button--enroll');
const btnLabelStatus = document.querySelector('.label-button--status');

const labelBtn = document.querySelector('.label-button');
console.log(labelBtn);

let windowWidth = screen.width;

btnEnroll.onclick = function () {
    modalWindow.classList.add('modal-move');
};

btnStatus.onclick = function () {
    modalWindowCall.classList.add('modal-move');
};

btnLabelEnroll.onclick = function () {
    modalWindow.classList.add('modal-move');
};

btnLabelStatus.onclick = function () {
    modalWindowCall.classList.add('modal-move');
};

btnCloseModal.onclick = function () {
    modalWindow.classList.remove('modal-move');
};

btnCloseModalCall.onclick = function () {
    modalWindowCall.classList.remove('modal-move');
};