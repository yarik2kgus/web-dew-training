//rest paremeter (прикинимает любое колличество параметров, полезно когда не знаем например сколько у нас будет параметров) , вернет массив
const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num*2)
}

const result = double (1,2,3,4,5,6,7,8);
console.log(result);

//spread syntax (arrays) (расширяет массив всеми элементами из прошлого массива)

const people = ['shaun', 'rju', 'crystal'];
const members = ['mario', 'chun-li', ...people]; 
console.log(members);

//spread syntax (object) (добавляет в js обьект те же свойства что были в другом)

const person = {name: 'shaun', age: 30, job: 'net ninja'};
const personClone = {...person, location:'Manchester'};
console.log(personClone);






//SETS (НОВАЯ структура данных в обьектах js), то же что и массив, но не пропускает дубликаты, при его создани вседа используется "new"
const namesArray = ['rju', 'chun-li', 'rju', 'shaun'];
console.log(namesArray);

// const namesSet = new Set(['rju', 'chun-li', 'rju', 'shaun']);
// console.log(namesSet);
// const uniquNames = [...namesSet]; //поулчили назад масив из сета
// console.log(uniquNames); 

const uniquNames = [...new Set(namesArray)] //то же что и выше, только в 1 действие
console.log(uniquNames); 

//методы Set(), добавление и удаление и другое, при этом не покажет повторящееся "25"
const ages = new Set();
ages.add(20);
ages.add(25).add(30);//chain
ages.add(25);
ages.delete(20);

console.log(ages, ages.size);
console.log(ages.has(30), ages.has(20));

// ages.clear();
// console.log(ages); //очищает весь set

const ninjas = new Set([  //массив обьектов js
    {name: 'shaun', age:30},
    {name: 'crystal', age:29},
    {name: 'chun-li', age:32},
]);

ninjas.forEach(ninja => { // некоторые методы массивов работют на Set()
    console.log(ninja.name, ninja.age)
});





//Symbols (два обьекта созданных таким способом всегда будут уникальны и не равны дргу другу, чтоп озволяет засунуть в один обьект js два и более одинаковых ключ - значение)

const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo); //false, потому что они не равны друг другу никогда

const ninja = {};

ninja.age=30; //ключ - значение можно прописывать как и "ninja.age" так и через ninja['belt']
ninja['belt'] = 'orange';
ninja['belt'] = 'black';  //можем дать 1 обьекту 2 одинаковых свойства , потому что "const symbolOne = Symbol('a generic name');" и "const symbolTwo = Symbol('a generic name');" не равны друг другу

ninja[symbolOne] = 'rju';
ninja[symbolTwo] = 'shaun';

console.log(ninja);