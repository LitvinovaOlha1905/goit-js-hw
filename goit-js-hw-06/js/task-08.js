const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки

  const formData = new FormData(event.currentTarget);
  const formObject = {};

  formData.forEach((value, name) => {
    formObject[name] = value;
  });

  if (!formObject.email || !formObject.password) {
    alert('All fields must be filled in.');
    return;
  }

  console.log(formObject); // Виводимо об'єкт з введеними даними в консоль
  loginForm.reset(); // Очищаємо значення полів форми
});

