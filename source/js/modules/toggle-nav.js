import {toggle, navBlock, logoMobile, overlay, mainScreen, pageBody} from '../utils/elements';

const checkLinkClick = (evt) => {
  if (evt.target.matches('a')) {
    closeNav();
  }
};

const openNav = () => {
  navBlock.classList.add('nav-block--opened');

  logoMobile.style.opacity = 0;
  mainScreen.style.opacity = 0;
  overlay.classList.add('overlay');
  pageBody.classList.add('stop-scrolling');

  navBlock.addEventListener('click', checkLinkClick, false);
};

const closeNav = () => {
  navBlock.classList.remove('nav-block--opened');

  logoMobile.style.opacity = 1;
  mainScreen.style.opacity = 1;
  overlay.classList.remove('overlay');
  pageBody.classList.remove('stop-scrolling');

  navBlock.removeEventListener('click', checkLinkClick, false);
};

const navToggle = () => {
  toggle.addEventListener('click', () => {
    if (navBlock.classList.contains('nav-block--opened')) {
      closeNav();
    } else {
      openNav();
    }
  });
};

export {navToggle};
