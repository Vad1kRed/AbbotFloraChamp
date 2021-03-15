"use strict";

var tabItem = document.querySelectorAll('.tab__item');
var contentItem = document.querySelectorAll('.content__item');
tabItem.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var id = e.target.getAttribute('href').replace('#', '');
    tabItem.forEach(function (item) {
      item.classList.remove('tab__item--active');
    });
    contentItem.forEach(function (item) {
      item.classList.remove('content__item--active');
    });
    item.classList.add('tab__item--active');
    document.getElementById(id).classList.add('content__item--active');
  });
});
var tabMobileItem = document.querySelectorAll('.tab-mobile__item');
var contentMobileItem = document.querySelectorAll('.content-mobile__item');
tabMobileItem.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var id = e.target.getAttribute('href').replace('#', '');
    tabMobileItem.forEach(function (item) {
      item.classList.remove('tab-mobile__item--active');
    });
    contentMobileItem.forEach(function (item) {
      item.classList.remove('content-mobile__item--active');
    });
    item.classList.add('tab-mobile__item--active');
    document.getElementById(id).classList.add('content-mobile__item--active');
  });
});