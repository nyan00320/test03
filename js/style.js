$(function () {
    $('#js-hamburger-menu, .navigation__list-item').on('click', function () {
      $('.navigation__list').slideToggle(500)
      $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });
  });