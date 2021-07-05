
const input = document.querySelector('#validation-input');
const inputLength = +input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let inputValue = event.target.value.length;
  if (inputValue === inputLength) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  }
  if (inputValue !== inputLength) {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
  if (inputValue === 0) {
    event.target.classList.remove('valid');
    event.target.classList.remove('invalid');
  }
}