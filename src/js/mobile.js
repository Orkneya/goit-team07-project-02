const menu = document.querySelector('[data-menu] ');
const menuBtn = document.querySelector('.menu__icon');
const btnClose = document.querySelector('[data-menu-close]');

const boby = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    menuBtn.classList.toggle('active');
    boby.classList.toggle('lock');
  });

  menu.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', toggleModal);
  });
}

if (btnClose) {
  btnClose.addEventListener('click',toggleModal);
}

function toggleModal() {
  menu.classList.remove('is-open');
  menuBtn.classList.remove('active');
  boby.classList.remove('lock');
}
