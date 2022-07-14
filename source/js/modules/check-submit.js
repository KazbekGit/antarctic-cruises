const checkBox = document.querySelector('#personal-data-agreement');
const submit = document.querySelector('#submit');

const isCheckBoxChecked = () => {
  return checkBox.checked;
};

const changeSubmitState = () => {
  if (checkBox || submit) {
    checkBox.addEventListener('change', () => {
      if (isCheckBoxChecked()) {
        submit.disabled = false;
      } else {
        submit.disabled = true;
      }
    });
  } else {
    throw new Error('Чекбокс и кнопка не найдены в DOM');
  }
};

export {changeSubmitState};
