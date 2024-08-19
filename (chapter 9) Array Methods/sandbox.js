const scores = [10, 30, 15, 25, 50, 40, 5];

    //Filter Method (соритрует исходя из уловий чувствителен к true или false, создает новый массив)

const filteredScores =  scores.filter((score) => {
    return score > 20;
});
console.log(filteredScores);

const users = [
    {name: 'shaun', premium:true},
    {name: 'yoshi', premium:false},
    {name: 'mario', premium:false},
    {name: 'chun-li', premium:true}
];

const premiumUsers = users.filter((user) => {
    return user.premium;
});

//const premiumUsers = users.filter(user => return user.premium;); то же самое

console.log(premiumUsers);

    //Map method (создает новый массив на основе старого добавляя в него изменения из коллбек функции)

const prices =  [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map((price) =>{
    return price / 2;
});
// const salePrices = prices.map(price => return price / 2;); То же самое
console.log(salePrices);

const products = [
    {name: 'gold star', price:20},
    {name: 'mushrooms', price:40},
    {name: 'red shells', price:30},
    {name: 'banana', price:10},
    {name: 'gray schels', price:50}
];

const saleProducts = products.map((product) => {
    if(product.price >30){
        return {name: product.name, price: product.price / 2} //вместо редактировать старый массив мы создаем нвоый
        //products.price = product.price / 2;
        //return product; (тоже сработает, но  тогда поменятся исходный массив products)
    } else {
        return product;
    };
});
console.log(saleProducts, products);

    //Reduce method  - накапливает результат в acc а в curr принимает текущий элемент , в конце отдает нам колличество цифр которые > 50, а то есть 3,а параметр начала "0" стоит в конце тела ф-и 
    //(acc - текущее значение аккумулятора (начинается с 0 описано в конце). 
    //curr - текущий элемент массива scores2.

const scores2 =  [10, 30, 15, 60, 70, 80, 5];

const result = scores2.reduce((acc, curr) => {
    if (curr > 50){
        acc++;
    }
    return acc;
}, 0);

console.log(result);

const scores3 = [
    {name: 'mario', score:50},
    {name: 'yoshi', score:30},
    {name: 'mario', score:70},
    {name: 'chun-li', score:60}
];

const marioTotal = scores3.reduce((acc, curr) => {
    if(curr.name === 'mario'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(marioTotal);

    //Find method (ищет конкретный заданный элемент по условию, и когда рнатыкается на первый элемент подходящий под условие прекращает свое действие)
const scores4 =  [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores4.find((score) => {
    return score > 50;
});
//const firstHighScore = scores4.find(score => score > 50;); то же самое что ф-я выше, просто упрощенная за счет толкьо 1-го аргумента
console.log(firstHighScore);

    //Sort method (сортирует элементы  не создает нового массива)(можно передать 2 числа в калбек и сравнивать их для правильной сортировки РЕАГИРУЕТ НА ПОЛОЖИТЕЛЬНОЕ ИЛИ ОТРИЦАТЕЛЬНОЕ ЧИСЛО ИЛИ 0. -1(а будет размещено перед b),1(b будет перед a),0(не поменяе свой порядок))

//1 sorting strings (автоматически сортирует по алфавиту если не задать ф-ю)
const names = ["mario", "shaun", 'chun-li', 'yoschi', 'luigi' ];
names.sort();
//names.reverse(); //последнее значение массива становиться первым и первое последним, отдаст массив "наоборот"
console.log(names)

//2 sorting numbers (автоматически сортирует только числа до 9, потому что ориентируется в числе 50 на "5",)
const scores5 =  [10, 50, 20, 5, 35, 70, 45,];
scores5.sort((a,b) => {
    return b - a; // если написать "a - b" то сортировка будет по возрастанию , фактически мы сравниваем а с б или б с а, подумай на примере a = 10, b =50
});
console.log(scores5);

//3 sorting objects
const players = [
    {name: 'mario', score:20},
    {name: 'yoshi', score:10},
    {name: 'luigi', score:50},
    {name: 'chun-li', score:30},
    {name: 'shaun', score:70}
];

players.sort((a,b) => {  //предстваим что а = 10, а b = 50 по массиву
    if(a.score > b.score){
        return -1; // a будет расположено перед b
    } else if (b.score > a.score){
        return 1; // b  будет размещено перед а
    } else {
        return 0; // порядок не важен (число на своем месте)
    }
});

//короткая версия кода выше, то есть это вернет нам либо отрицательное "-1" либо положительное значение "1" или "0" что расставит числа по порядку
players.sort((a,b) => {
    return b.score - a.score;
});

console.log(players);

    //chaining array

const products1 = [
    {name: 'gold star', price:20},
    {name: 'mushrooms', price:40},
    {name: 'red shells', price:30},
    {name: 'banana', price:10},
    {name: 'gray schels', price:50}
];

//V.1
// const filtered = products1.filter(product => product.price > 20);

// const promos =  filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

//V.2
const promos = products1
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`); //можем обьеденить методы "зачейнить" потому что filter выдает новый массив а map работат с массивом

console.log(promos);
