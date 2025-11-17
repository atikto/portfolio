const burger = document.querySelector('.burger-menu'); // кнопка бургера
const nav = document.querySelector('.nav');            // меню
const navLinks = document.querySelectorAll('.nav a');  // все ссылки меню

// открытие/закрытие меню при клике на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

// закрытие меню при клике на любую ссылку
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active'); // возвращаем бургер в исходное положение
    nav.classList.remove('active');    // прячем меню
  });
});