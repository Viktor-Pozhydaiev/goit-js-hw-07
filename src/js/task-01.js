const navItemEl = document.querySelectorAll('.item');
console.log(`В списке ${navItemEl.length} категории.`);
navItemEl.forEach(element => {
    console.log(`Категория: ${element.firstElementChild.textContent}.
Количество елементов: ${element.querySelectorAll('li').length}. `
     )
    
    
});