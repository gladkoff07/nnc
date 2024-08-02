"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.js-submenu').addEventListener('click', function (e) {
    e.preventDefault();
    this.closest('.menu__item').querySelector('.menu__sub').classList.toggle('menu__sub--active');
  });
  document.querySelector('.close-sub-menu').addEventListener('click', function () {
    this.closest('.menu__sub').classList.remove('menu__sub--active');
  });
});