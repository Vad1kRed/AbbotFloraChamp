const basketBox = document.querySelector('.basket__box');
const basketMenu = document.querySelector('.basket__menu');

basketBox.addEventListener('click', () => {
    basketMenu.classList.toggle('basket__menu--active');
    basketBox.style.minWidth = basketMenu.offsetWidth + 'px';
});