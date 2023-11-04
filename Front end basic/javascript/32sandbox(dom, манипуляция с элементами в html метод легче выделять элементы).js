// const para = document.querySelector('div.error'); //(получаем Nodeлист)  // метод берет первый элемент их html с указанным css селектором ДЛЯ ВЫБОРА 1 ЭЛЕМЕНТА //("div.error") скобки "" нужны что бы js понимал что это селектор css а не что - то другое, синтаксис как в css с "., #, > и тд", но синтаксис толкьо для этих методов
// console.log(para);

const paras = document.querySelectorAll('p');    //ДЛЯ ВЫБОРА НЕСКОЛЬКИХ ЭЛЕМЕНТОВ (получаем Nodeлист)
const errors = document.querySelectorAll('.error')


// paras.forEach(para =>{
//     console.log(para); //forEach перебирает нодлист (почти то же что и массив) и через коллбек функцию выводит все его лементы, без него мы будем видеть в консоли сам нодлист и не более
// });

console.log(paras);