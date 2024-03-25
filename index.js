let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
}
