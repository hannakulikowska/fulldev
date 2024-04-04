import './style.scss';

import { initializeBurgerMenu } from './scripts/header/initializeBurgerMenu';

if (window.location.pathname === '/' && navigator.language.includes('ua')) {
  window.location.href = '/ua';
}

initializeBurgerMenu();
