export function initializeBurgerMenu() {
  const checkbox = document.getElementById('burger-checkbox') as HTMLInputElement;
  const navigation = document.querySelector('.header__nav');
  checkbox.addEventListener('change', function () {
    if (navigation) {
      navigation.classList.toggle('header__nav_is-active', this.checked);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.header__menu-link');

    links.forEach((link) => {
      link.addEventListener('click', () => {
        if (checkbox) {
          checkbox.checked = false;

          if (navigation) {
            navigation.classList.remove('header__nav_is-active');
          }
        }
      });
    });
  });
}
