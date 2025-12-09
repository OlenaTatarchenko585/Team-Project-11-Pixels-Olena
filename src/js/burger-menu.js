(() => {
  const refs = {
    openBurgerBtn: document.querySelector('[data-burger-open]'),
    closeBurgerBtn: document.querySelector('[data-burger-close]'),
    burger: document.querySelector('[data-burger]'),
    navigationLinks: document.querySelectorAll('.navigation'),
  };

  refs.openBurgerBtn.addEventListener('click', toggleBurger);
  refs.closeBurgerBtn.addEventListener('click', toggleBurger);

   refs.navigationLinks.forEach(link => {
     link.addEventListener('click', () => {
       toggleBurger();
     });
   });

  function toggleBurger() {
    refs.burger.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
})();