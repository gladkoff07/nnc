"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var _document$querySelect, _document$querySelect2, _document12, _document13;
  // input mask
  document.querySelectorAll('.js-form-phone').forEach(function (e) {
    var phoneMask = IMask(e, {
      mask: '+{7}(000)000-00-00'
    });
  });

  //  catalog
  (_document$querySelect = document.querySelector('.js-submenu')) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener('click', function (e) {
    var _this$closest;
    e.preventDefault();
    (_this$closest = this.closest('.menu__item')) === null || _this$closest === void 0 || (_this$closest = _this$closest.querySelector('.menu__sub')) === null || _this$closest === void 0 || _this$closest.classList.toggle('menu__sub--active');
  });

  // catalog close
  (_document$querySelect2 = document.querySelector('.close-sub-menu')) === null || _document$querySelect2 === void 0 || _document$querySelect2.addEventListener('click', function () {
    var _this$closest2;
    (_this$closest2 = this.closest('.menu__sub')) === null || _this$closest2 === void 0 || _this$closest2.classList.remove('menu__sub--active');
  });

  // clone element for mob menu
  (function () {
    // Условие для viewport шириной 1029
    var mediaQuery = window.matchMedia("(max-width: 1029px)");
    function handleTabletChange(e) {
      // Проверить, что media query будет true
      if (e.matches) {
        var _document$querySelect3, _document$querySelect4, _document, _document2, _document3, _document4, _document5;
        var headerMenu = (_document$querySelect3 = document.querySelector(".header__bottom")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.querySelector(".menu");
        var menuMobileBody = (_document$querySelect4 = document.querySelector(".menu-mobile")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.querySelector('.menu-mobile__body');
        menuMobileBody === null || menuMobileBody === void 0 || menuMobileBody.prepend(headerMenu);
        var phone = (_document = document) === null || _document === void 0 || (_document = _document.querySelector('.header__top')) === null || _document === void 0 ? void 0 : _document.querySelector(".link-phone");
        phone === null || phone === void 0 || phone.classList.remove('header__phone');
        var menuMobPhone = (_document2 = document) === null || _document2 === void 0 || (_document2 = _document2.querySelector('.menu-mobile')) === null || _document2 === void 0 ? void 0 : _document2.querySelector(".menu-mobile__bottom-phone");
        menuMobPhone === null || menuMobPhone === void 0 || menuMobPhone.append(phone);
        var orderCall = ((_document3 = document) === null || _document3 === void 0 || (_document3 = _document3.querySelector('.header__top')) === null || _document3 === void 0 ? void 0 : _document3.querySelector(".order-call")) || ' ';
        orderCall === null || orderCall === void 0 || orderCall.classList.remove('header__order-call');
        var menuMobPhoneNumber = (_document4 = document) === null || _document4 === void 0 || (_document4 = _document4.querySelector('.menu-mobile')) === null || _document4 === void 0 ? void 0 : _document4.querySelector(".link-phone");
        menuMobPhoneNumber === null || menuMobPhoneNumber === void 0 || menuMobPhoneNumber.after(orderCall);
        var linkEmail = (_document5 = document) === null || _document5 === void 0 || (_document5 = _document5.querySelector('.header__top')) === null || _document5 === void 0 ? void 0 : _document5.querySelector(".link-email");
        linkEmail === null || linkEmail === void 0 || linkEmail.classList.remove('header__email');
        // const menuMobPhoneNumber = document?.querySelector('.menu-mobile')?.querySelector(".link-phone");
        menuMobPhone === null || menuMobPhone === void 0 || menuMobPhone.after(linkEmail);
      } else {
        var _document$querySelect5, _document6, _document7, _document8, _document9, _document10, _document11;
        document.querySelector('body').classList.remove('body-fixed');
        document.querySelector('.menu-mobile').classList.remove('menu-mobile--active');
        var menuMobile = (_document$querySelect5 = document.querySelector(".menu-mobile")) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.querySelector('.menu');
        var menuHeader = document.querySelector(".header__bottom");
        menuHeader === null || menuHeader === void 0 || menuHeader.prepend(menuMobile);
        var emailMenu = (_document6 = document) === null || _document6 === void 0 || (_document6 = _document6.querySelector('.menu-mobile')) === null || _document6 === void 0 ? void 0 : _document6.querySelector(".link-email");
        emailMenu === null || emailMenu === void 0 || emailMenu.classList.add('header__email');
        var headerLogo = (_document7 = document) === null || _document7 === void 0 || (_document7 = _document7.querySelector('.header__top')) === null || _document7 === void 0 ? void 0 : _document7.querySelector(".logo");
        headerLogo === null || headerLogo === void 0 || headerLogo.after(emailMenu);
        var orderCallMenu = ((_document8 = document) === null || _document8 === void 0 || (_document8 = _document8.querySelector('.menu-mobile')) === null || _document8 === void 0 ? void 0 : _document8.querySelector(".order-call")) || '';
        // console.log('orderCallMenu>>', typeof(orderCallMenu))
        if (orderCallMenu === 'string') {
          return ' ';
        } else {
          orderCallMenu === null || orderCallMenu === void 0 || orderCallMenu.classList.add('header__order-call');
        }
        var headerEmail = (_document9 = document) === null || _document9 === void 0 || (_document9 = _document9.querySelector('.header__top')) === null || _document9 === void 0 ? void 0 : _document9.querySelector(".link-email");
        headerEmail === null || headerEmail === void 0 || headerEmail.after(orderCallMenu);
        var phoneMobile = (_document10 = document) === null || _document10 === void 0 || (_document10 = _document10.querySelector('.menu-mobile')) === null || _document10 === void 0 ? void 0 : _document10.querySelector(".link-phone");
        phoneMobile === null || phoneMobile === void 0 || phoneMobile.classList.remove('header__phone');
        var headerOrderCall = (_document11 = document) === null || _document11 === void 0 || (_document11 = _document11.querySelector('.header__top')) === null || _document11 === void 0 ? void 0 : _document11.querySelector(".order-call");
        headerOrderCall === null || headerOrderCall === void 0 || headerOrderCall.append(phoneMobile);
      }
    }
    // Слушать события
    mediaQuery.addListener(handleTabletChange);

    // Начальная проверка
    handleTabletChange(mediaQuery);
  })();

  // nav
  // menu mobile
  var buttonMenu = (_document12 = document) === null || _document12 === void 0 ? void 0 : _document12.querySelector(".js-mobile-button");
  var blockMenu = (_document13 = document) === null || _document13 === void 0 ? void 0 : _document13.querySelector(".menu-mobile");
  // const buttonMenuClose = document?.querySelector('.js-menu-close');

  var openMenu = function openMenu() {
    blockMenu.classList.toggle("menu-mobile--active");
    document.querySelector('body').classList.add('body-fixed');
  };
  var closeMenu = function closeMenu() {
    blockMenu === null || blockMenu === void 0 || blockMenu.classList.remove("menu-mobile--active");
  };
  buttonMenu === null || buttonMenu === void 0 || buttonMenu.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle('mobile-link__item--active');
    openMenu();
  });

  // buttonMenuClose?.addEventListener("click", () => {
  //   closeMenu();
  // });
});