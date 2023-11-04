//Math objects

console.log(Math)
console.log(Math.PI)
console.log(Math.E)
    
const area = 7.7;

console.log(Math.round(area));  //Обращаемся к обьекту (console используем метод(функцию) обьекта .log) передавая в нее обьект (Math с его методом .round) который в свою очередь как аргумент будет использовать (area) 
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100)); //рандомное целое число от 0 до 100.
