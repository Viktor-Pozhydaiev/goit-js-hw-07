const inputRange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputRange.addEventListener('input', onInputRange);

function onInputRange(event) {
  let startValueRange = +event.target.value;

  textSpan.style.fontSize = `${startValueRange + 0.1}px`;
}