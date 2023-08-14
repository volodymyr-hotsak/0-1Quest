'use strict';

const tabItem = document.querySelectorAll('.tabs__btn-item'),
  tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element) {
  element.addEventListener('click', open);
});

function open(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active');
  });

  tabContent.forEach(function (item) {
    item.classList.remove('tabs__content-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');
  document
    .querySelector(`#${button}`)
    .classList.add('tabs__content-item--active');
}

/*menu */

const menuBtn = document.querySelector('.menu-btn'),
  menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});
