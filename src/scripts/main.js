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