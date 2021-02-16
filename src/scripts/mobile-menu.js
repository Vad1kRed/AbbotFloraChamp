const html = document.querySelector('html');
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