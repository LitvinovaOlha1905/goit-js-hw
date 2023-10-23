// Вибираємо елементи
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо слухача події 'input' на інпут
nameInput.addEventListener('input', () => {

    // Отримуємо значення інпуту
    const inputValue = nameInput.value;

    // Встановлюємо текст в спані відповідно до введеного значення
    if (inputValue === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputValue;
    }
});

