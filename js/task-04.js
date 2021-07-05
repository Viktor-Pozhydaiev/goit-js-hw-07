const ref = {
  btnDecrementValue: document.querySelector('[data-action="decrement"]'),
  btnIncrementValue: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};
let counterValue = 0;
ref.btnIncrementValue.addEventListener('click', increment);
ref.btnDecrementValue.addEventListener('click', decrement);
function increment() {
  counterValue += 1;
  renewalValue();
}
function decrement() {
  counterValue -= 1;
    renewalValue();
}
function renewalValue() {
  ref.valueEl.textContent = counterValue;
}