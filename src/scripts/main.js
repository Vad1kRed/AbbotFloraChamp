const basketBox = document.querySelector('.basket__box');
const basketMenu = document.querySelector('.basket__menu');

basketBox.addEventListener('click', () => {
    basketMenu.classList.toggle('basket__menu--active');
    
    if (basketMenu.classList.contains('basket__menu--active')) {
        basketBox.setAttribute('style', 'min-width: ' + basketMenu.offsetWidth + 'px');
    } else {
        basketBox.removeAttribute('style');
    }
});

const body = document.querySelector('.body');
const burger = document.querySelector('.burger');
const headerMobile = document.querySelector('.mobile');
const headerMobileBody = document.querySelector('.mobile__body');

burger.addEventListener('click', () => {
    body.classList.toggle('body--hidden');
    burger.classList.toggle('burger--active');
    headerMobile.classList.toggle('mobile--active');
    headerMobileBody.classList.toggle('mobile__body--active');
});