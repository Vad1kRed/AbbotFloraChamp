const html = document.querySelector('html');
const warning = document.querySelector('.warning');
const warningBtn = document.querySelector('.warning__btn');

warningBtn.addEventListener('click', function(e) {
    e.preventDefault();
    html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
    warning.classList.remove('warning--active');
    
    Cookies.set('warning-cookie', 'true', {
        expires: 14
    });
});

const cookies = () => {
    if (!Cookies.get('warning-cookie')) {
        html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
        warning.classList.add('warning--active');
    }
}

cookies();