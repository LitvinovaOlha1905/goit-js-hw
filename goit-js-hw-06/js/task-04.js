// Початкове значення лічильника
let counterValue = 0;

// Вибираємо елементи
const valueBtn = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

// Додаємо слухача на кнопку "Зменшити"
const onClickDecrementBtn = (event) => {
  counterValue -= 1;
  valueBtn.textContent = counterValue;
};
decrementBtn.addEventListener("click", onClickDecrementBtn);

// Додаємо слухача на кнопку "Збільшити"
const onClickIncrementBtn = (event) => {
  counterValue += 1;
  valueBtn.textContent = counterValue;
};
incrementBtn.addEventListener("click", onClickIncrementBtn);