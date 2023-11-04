//смена и создание новых атрибутов в html через js
const link = document.querySelector('a');//выбрали первый эелемент по тегу

console.log(link.getAttribute('href'));//посмотрели чему равен атрибут
link.setAttribute('href', 'https://www.google.de/?hl=ru');//сменили значение атрибута
link.innerText = 'TheNet Ninja Website';//сменили текст для ссылки

const mssg = document.querySelector('p');//выбрали первый элемент по тегу

console.log(mssg.getAttribute('class'));// поскольку тег не имеет атрибута 'class', то будет ошибка
mssg.setAttribute('class', 'success');//меняем атрибут на нужный нам
mssg.setAttribute('style', 'color: green'); //создали тегу атрибут с нуля