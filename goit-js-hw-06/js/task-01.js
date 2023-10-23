
// Вибираємо елемент ul#categories
const categoriesListEl = document.querySelector('#categories');

// Знаходимо всі елементи li.item у списку ul#categories
const categoryItemsEl = categoriesListEl.querySelectorAll('li.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItemsEl.length}`);

// Проходимося по кожному елементу li.item
categoryItemsEl.forEach(categoryItemEl => {
  // Знаходимо текст заголовку (тегу <h2>)
  const categoryTitleEl = categoryItemEl.querySelector('h2').textContent;

  // Знаходимо всі елементи <li> вкладені у поточну категорію
  const elements = categoryItemEl.querySelectorAll('ul li');

  // Виводимо інформацію про категорію та кількість елементів в ній
  console.log(`Category: ${categoryTitleEl}`);
  console.log(`Elements: ${elements.length}`);
});