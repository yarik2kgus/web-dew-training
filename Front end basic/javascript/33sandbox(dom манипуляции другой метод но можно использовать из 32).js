// get an element by ID (получаем htmlколлекцию)

const title = document.getElementById('page-title');  // не нужен синтаксис как в css в "", что это айди а именно # поскольку уже и так написно  "ById" и скрипт поинмает что это только по айди
console.log(title);

// get element by their class name (получаем htmlколлекцию)

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
 // errors.forEach(error => {
 //     console.log(error);
 // }); не будет работать потому что не может взаимодействовать с html коллекцией

// get ellement by their tag name

const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);


