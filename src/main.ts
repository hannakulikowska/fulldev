import './style.scss';

import BurgerMenu from './scripts/BurgerMenu';
import AnimateOnScroll from './scripts/AnimateOnScroll';

if (window.location.pathname === '/' && navigator.language.includes('uk')) {
  window.location.href = '/uk';
}

new BurgerMenu();
new AnimateOnScroll(['.timeline__item', '.intro__title-box-dash']);
