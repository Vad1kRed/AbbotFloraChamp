"use strict";

var html = document.querySelector('html');
var warning = document.querySelector('.warning');
var warningBtn = document.querySelector('.warning__btn');
warningBtn.addEventListener('click', function (e) {
  e.preventDefault();
  html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
  warning.classList.remove('warning--active');
  Cookies.set('warning-cookie', 'true', {
    expires: 14
  });
});

var cookies = function cookies() {
  if (!Cookies.get('warning-cookie')) {
    html.classList.contains('hidden') ? html.removeAttribute('class') : html.classList.add('hidden');
    warning.classList.add('warning--active');
  }
};

cookies();