const checkBox = document.querySelector('.booking-form__checkbox');
const submit = document.querySelector('.booking-form__submit');

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

