const html = document.querySelector('html');
const buy = document.querySelectorAll('.buy');
const mobile = document.querySelector('.mobile');
const transition = document.querySelector('.transition');
const close = document.querySelector('.close');
const transitionBtnGo = document.querySelector('.transition__btn--go');
const transitionBtnReturn = document.querySelector('.transition__btn--return');

buy.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
        mobile.classList.contains('mobile--active') ? html.classList.add('hidden') : false; 
        transition.classList.add('transition--active');
        transitionBtnGo.href = item.href; 
    });
});

close.addEventListener('click', () => {
    html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
    mobile.classList.contains('mobile--active') ? html.classList.add('hidden') : false; 
    transition.classList.remove('transition--active');
});

transitionBtnReturn.addEventListener('click', () => {
    html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
    mobile.classList.contains('mobile--active') ? html.classList.add('hidden') : false;
    transition.classList.remove('transition--active');
});