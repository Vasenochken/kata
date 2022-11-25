const menu = document.querySelector('.mobile-menu');
const btnOpen = document.querySelector('.button.button--icon-burger');
const btnClose = document.querySelector('.button.button--icon-close');

btnClose.onclick = function () {
    menu.classList.toggle('move');
};

const toggleMenu = function () {
    menu.classList.toggle("move");
}

btnOpen.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnOpen;
    const menu_is_active = menu.classList.contains("move");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});