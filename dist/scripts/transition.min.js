"use strict";

var html = document.querySelector('html');
var buy = document.querySelectorAll('.buy');
var mobile = document.querySelector('.mobile');
var transition = document.querySelector('.transition');
var close = document.querySelector('.close');
var transitionBtnGo = document.querySelector('.transition__btn--go');
var transitionBtnReturn = document.querySelector('.transition__btn--return');
buy.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
    mobile.classList.contains('mobile--active') ? html.classList.add('hidden') : false;
    transition.classList.add('transition--active');
    transitionBtnGo.href = item.href;
  });
});
close.addEventListener('click', function () {
  html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
  mobile.classList.contains('mobile--active') ? html.classList.add('hidden') : false;
  transition.classList.remove('transition--active');
});
transitionBtnReturn.addEventListener('click', function () {
  html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
  mobile.classList.contains('mobile--active') ? html.classList.add('hidden') : false;
  transition.classList.remove('transition--active');
});