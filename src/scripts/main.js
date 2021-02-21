// const basketBox = document.querySelector('.basket__box');
// const basketMenu = document.querySelector('.basket__menu');

// basketBox.addEventListener('click', () => {
//     basketMenu.classList.toggle('basket__menu--active');
    
//     if (basketMenu.classList.contains('basket__menu--active')) {
//         basketBox.setAttribute('style', 'min-width: ' + basketMenu.offsetWidth + 'px');
//     } else {
//         basketBox.removeAttribute('style');
//     }
// });

// const html = document.querySelector('html');
// const burger = document.querySelector('.burger');
// const blur = document.querySelector('.blur');
// const mobile = document.querySelector('.mobile');
// const mobileBox = document.querySelector('.mobile__box');
// const mobileBody = document.querySelector('.mobile__body');

// burger.addEventListener('click', () => {
//     html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');

//     burger.classList.toggle('burger--active');
//     blur.classList.toggle('blur--active');
//     mobile.classList.toggle('mobile--active');
//     mobileBox.classList.toggle('mobile__box--active');
//     mobileBody.classList.toggle('mobile__body--active');
// });

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

const destinationLink = document.querySelectorAll('.destination__link');
const desc = document.querySelectorAll('.desc');

destinationLink.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        destinationLink.forEach(item => {
            item.classList.remove('destination__link--active');
        });
        desc.forEach(item => {
            item.classList.remove('desc--active');
        });
        item.classList.add('destination__link--active');
        document.getElementById(id).classList.add('desc--active');
    });
});

const childrenText = document.querySelectorAll('.children__text');
const adultsText = document.querySelectorAll('.adults__text');
const childrenBrand = document.querySelector('.children__brand');
const adultsBrand = document.querySelector('.adults__brand');

childrenText.forEach(item => {
    item.addEventListener('click', () => {
        childrenText.forEach(item => {
            item.classList.remove('desc__text--active');
        });
        item.classList.add('desc__text--active');
        childrenBrand.textContent = item.dataset['name'];
    });
});

adultsText.forEach(item => {
    item.addEventListener('click', () => {
        adultsText.forEach(item => {
            item.classList.remove('desc__text--active');
        });
        item.classList.add('desc__text--active');
        adultsBrand.textContent = item.dataset['name'];
    });
});

// const childrenText = document.querySelector('.children__text');
// const childrenWord = document.querySelector('.children__word');
// const childrenBrand = document.querySelector('.children__brand');
// const adultsText = document.querySelector('.adults__text');
// const adultsWord = document.querySelector('.adults__word');
// const adultsBrand = document.querySelector('.adults__brand');

// childrenText.addEventListener('click', () => {
//     childrenBrand.textContent = 'Дети 1';
// });

// childrenWord.addEventListener('click', () => {
//     childrenBrand.textContent = 'Дети 2';
// });

// adultsText.addEventListener('click', () => {
//     adultsBrand.textContent = 'Взрослые 1';
// });

// adultsWord.addEventListener('click', () => {
//     adultsBrand.textContent = 'Взрослые 2';
// });

// const resultBtn = document.querySelector('.result__btn');
// const desc = document.querySelector('.desc');

// resultBtn.addEventListener('click', () => {
//     desc.classList.toggle('desc--active');
// });