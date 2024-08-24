// чтобы сохранить массив в localStorage, его нужно сначала конвертировать в строку, потому что localStorage может хранить только строки.

// save data in local storage
localStorage.setItem('name', 'mario'); // всегда 2 аргумент 1 - название ключа, 2 - значение ключа
localStorage.setItem('age', 50);

// get data from local storage
let name = localStorage.getItem('name'); // получаем значение по названию ключа
let age = localStorage.getItem('age');

console.log(name, age);

// updating data  (в консоли зайти Application --> Local storage), там будут только значения которые мы обновили здесь
localStorage.setItem('name', 'luigi'); // тот же метод что и для постановки, просто меняет значение под нашим ключем если такой уже существовал
localStorage.age = '40'; // то же самое что и сверху, только здесь мы обращаемся напрямую к свойству по ключу

name = localStorage.getItem('name');
age = localStorage.getItem('age')
console.log(name, age);

//delete data from local storage
//localStorage.removeItem('name'); // удаляет только определенный элемент из локал стореджа
localStorage.clear(); // удаляет все элементы из локал стореджа

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age); // выдаст null при том что выше будут 2 строчки, потому что у нас стоят консол логи до того как сработало удаление 


//Stringifying and Parsing data

const todos = [ 
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
  ];


//чтобы сохранить массив в localStorage, его нужно сначала конвертировать в строку, потому что localStorage может хранить только строки.
console.log(JSON.stringify(todos)); 

localStorage.setItem('todos', JSON.stringify(todos)); 

//конвертация назад из строчного формата в обьект js
const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));