const events = {
input : document.querySelector(`#name-input`),
nameOutput : document.querySelector(`#name-output`),
}

events.input.addEventListener('input', onInputChange);
event.input.addEventListener('input', onInputChange);
function onInputChange(event) {
  if (event.currentTarget.value === '') {
    events.nameOutput.textContent = 'незнакомец';
  } else events.nameOutput.textContent = event.currentTarget.value
}