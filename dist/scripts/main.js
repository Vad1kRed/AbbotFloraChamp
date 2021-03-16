"use strict";

var destinationLink = document.querySelectorAll('.destination__link');
var desc = document.querySelectorAll('.desc');
destinationLink.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var id = e.target.getAttribute('href').replace('#', '');
    destinationLink.forEach(function (item) {
      item.classList.remove('destination__link--active');
    });
    desc.forEach(function (item) {
      item.classList.remove('desc--active');
    });
    item.classList.add('destination__link--active');
    document.getElementById(id).classList.add('desc--active');
  });
}); // const childrenText = document.querySelectorAll('.children__text');
// const adultsText = document.querySelectorAll('.adults__text');
// const childrenBrand = document.querySelector('.children__brand');
// const adultsBrand = document.querySelector('.adults__brand');
// childrenText.forEach(item => {
//     item.addEventListener('click', () => {
//         childrenText.forEach(item => {
//             item.classList.remove('desc__text--active');
//         });
//         item.classList.add('desc__text--active');
//         childrenBrand.textContent = item.dataset['name'];
//     });
// });
// adultsText.forEach(item => {
//     item.addEventListener('click', () => {
//         adultsText.forEach(item => {
//             item.classList.remove('desc__text--active');
//         });
//         item.classList.add('desc__text--active');
//         adultsBrand.textContent = item.dataset['name'];
//     });
// });

var descTexts = document.querySelectorAll('.desc__text');

function hideResults() {
  descTexts.forEach(function (item) {
    item.nextElementSibling.classList.add('desc__brand--hidden');
    item.classList.remove('desc__text--active');
  });
}

hideResults();
descTexts.forEach(function (item) {
  return item.addEventListener("click", function (e) {
    hideResults();
    e.target.nextElementSibling.classList.remove('desc__brand--hidden');
    e.target.classList.add('desc__text--active');
  });
});