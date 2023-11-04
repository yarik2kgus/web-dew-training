//callback & foreach

// const myFunc = (callbackFunc) =>{
// //do something
// let value = 50;
// callbackFunc(value); //для последующей активации функции которая будет задана в качестве аргумента вместо параметра callbackFunc.
// };

// myFunc(function(value){     // ОБРАТИ ВНИМАНИЕ ЧТО function(value) - МЫ ПРОПИСАЛИ ОТДЕЛЬНЫЙ БЛОК КОДА ДЛЯ НЕЕ ЧТО БЫ НЕ СОЗДАВАТЬ НОВУЮ ФУНКЦИЮ
//     //do something
//     console.log(value);
// });
//Вот более понятная для меня запись

function myFunc(callbackFunc){
    let value = 50;
    callbackFunc(value); //для последующей активации функции которая будет аргументом
}

function kek(value){
    console.log(value);
}

myFunc(kek);

//Или

// myFunc(value => {
//     //do something
//     console.log(value);
// });

let people = ['mario', 'luigi', 'ryu', 'schaun', 'chun-li']

// people.forEach(function(person){
//     console.log(person);
// });

//ИЛИ

// people.forEach((person, index) => {
//     console.log(index, person);
// });

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);