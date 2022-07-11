import {toggle, navBlock, logoMobile} from '../utils/elements';

const toggleNav = () => {
  toggle.addEventListener('click', () => {
    navBlock.classList.toggle('nav-block--opened');
    if (navBlock.classList.contains('nav-block--opened')) {
      logoMobile.style.opacity = 0;
    } else {
      logoMobile.style.opacity = 1;
    }
  });
};

export {toggleNav};

