import './style.scss';

import { initializeBurgerMenu } from './scripts/header/initializeBurgerMenu';
import AnimationObserver from './scripts/intro/AnimationObserver';

if (window.location.pathname === '/' && navigator.language.includes('ua')) {
  window.location.href = '/ua';
}

initializeBurgerMenu();

document.addEventListener('DOMContentLoaded', (): void => {
  const animationObserver = new AnimationObserver();
  animationObserver.observe('.intro__title-box-dash');
});
