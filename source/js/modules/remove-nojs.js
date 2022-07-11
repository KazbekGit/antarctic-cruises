import {navBlock} from '../utils/elements';

const deleteNoJS = () => {
  if (navBlock.classList.contains('nav-block--nojs')) {
    navBlock.classList.remove('nav-block--nojs');
  }
};

export {deleteNoJS};
