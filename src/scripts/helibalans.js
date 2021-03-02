const purchaseBox = document.querySelector('.purchase__box');
const purchaseMenu = document.querySelector('.purchase__menu');

purchaseBox.addEventListener('click', () => {
    purchaseMenu.classList.toggle('purchase__menu--active');
});

const tabItem = document.querySelectorAll('.tab__item');
const contentItem = document.querySelectorAll('.content__item');

tabItem.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        tabItem.forEach(item => {
            item.classList.remove('tab__item--active');
        });
        contentItem.forEach(item => {
            item.classList.remove('content__item--active');
        });
        item.classList.add('tab__item--active');
        document.getElementById(id).classList.add('content__item--active');
    });
});

const tabMobileItem = document.querySelectorAll('.tab-mobile__item');
const contentMobileItem = document.querySelectorAll('.content-mobile__item');

tabMobileItem.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        tabMobileItem.forEach(item => {
            item.classList.remove('tab-mobile__item--active');
        });
        contentMobileItem.forEach(item => {
            item.classList.remove('content-mobile__item--active');
        });
        item.classList.add('tab-mobile__item--active');
        document.getElementById(id).classList.add('content-mobile__item--active');
    });
});