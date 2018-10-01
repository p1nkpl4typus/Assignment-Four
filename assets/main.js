// Mobile Nav Bar
const button = document.querySelector('#nav-btn-open');
const close = document.querySelector('#nav-btn-closed');
const menu = document.querySelector('#menu');

function openMenu() {
  menu.className = 'mobile-nav';
  menu.setAttribute('aria-expanded', 'true');
};

function closeMenu() {
  menu.className = 'mobile-nav closed';
  menu.setAttribute('aria-expanded', 'false');
}

button.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
