const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Вибираємо елемент ul#ingredients
const ingredientsListEl = document.querySelector('#ingredients');

// Створюємо елементи <li> для кожного інгредієнта і додаємо їм клас "item"
const liItemEl = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

// Вставляємо усі елементи <li> одним операцією до списку ul#ingredients
ingredientsListEl.append(...liItemEl);

