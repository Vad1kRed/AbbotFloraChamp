"use strict";

var html = document.querySelector('html');
var burger = document.querySelector('.burger');
var blur = document.querySelector('.blur');
var mobile = document.querySelector('.mobile');
var mobileBox = document.querySelector('.mobile__box');
var mobileBody = document.querySelector('.mobile__body');
burger.addEventListener('click', function () {
  html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
  burger.classList.toggle('burger--active');
  blur.classList.toggle('blur--active');
  mobile.classList.toggle('mobile--active');
  mobileBox.classList.toggle('mobile__box--active');
  mobileBody.classList.toggle('mobile__body--active');
});