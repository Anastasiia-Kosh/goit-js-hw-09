const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', event => {
  const newFormData = new FormData(form);
  formData.email = newFormData.get('email');
  formData.message = newFormData.get('message');

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', event => {
  const userData = localStorage.getItem(localStorageKey);
  const userForm = JSON.parse(userData) || {};
  form.elements.email.value = userForm.email || '';
  form.elements.message.value = userForm.message || '';
  formData.email = userForm.email || '';
  formData.message = userForm.message || '';
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
});
