//add todos

const addForm = document.querySelector(".add");
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

const genarateTemplate = (newLi) => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${newLi}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html

}; //отдельная ф-я, добавляет в ul еже одну li которую мы создаем, используется ниже

addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); // trim() обрезает пробелы, не дает ввести нам что - то с пробелами

    if(todo.length){
        genarateTemplate(todo);
        addForm.reset(); //сбрасывает уже введенную в форму информацию после субмита 
    }
});

//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){  // e.target - возвращает элемент в элементе с классом list на ккотором был произведен "click"
        e.target.parentElement.remove();
    }

});

//function for searching filtration 
const filterTodos = (term) => {
    Array.from(list.children)
        .filter ((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter ((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
}; 

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});