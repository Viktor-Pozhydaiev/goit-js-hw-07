const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listContainer = document.querySelector(`ul#ingredients`);
// console.log(listContainer)
const insertListItems = items => {
  const unit = document.createElement(`li`);
  unit.textContent = items;
  return unit;
};
  
const allUnits = ingredients.map(items => insertListItems(items));
listContainer.append(...allUnits);