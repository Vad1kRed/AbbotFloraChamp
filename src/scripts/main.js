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

const html = document.querySelector('html');
const body = document.querySelector('body');

const burger = document.querySelector('.burger');
const blur = document.querySelector('.blur');
const mobile = document.querySelector('.mobile');
const mobileBox = document.querySelector('.mobile__box');
const mobileBody = document.querySelector('.mobile__body');

burger.addEventListener('click', () => {
    html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');

    burger.classList.toggle('burger--active');
    blur.classList.toggle('blur--active');
    mobile.classList.toggle('mobile--active');
    mobileBox.classList.toggle('mobile__box--active');
    mobileBody.classList.toggle('mobile__body--active');
});

const resultBtn = document.querySelector('.result__btn');
const desc = document.querySelector('.desc');

resultBtn.addEventListener('click', () => {
    desc.classList.toggle('desc--active');
});