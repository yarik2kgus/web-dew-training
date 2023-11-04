//primitive value
//По причине того что примитивные данные хранятся в stack когда мы дублируем scoreOne и меняем его на 100, то меняется не изначальное значение а создается новое и тогда у нас будет в стаке и 50 и 100
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); //обьяснение для себя то есть у нас scoretwo скопирует значение score one до того как мы применили к нему новое значение 100 , то есть оно не "отссылается" к значению а копирует его целиком

//reference value  

const userOne = {name: 'ryu', age: 30 };
const userTwo = userOne; //userTwo ссылается на тот же объект, что и userOne. То есть они ссылаются на один и тот же участок памяти, где хранится объект.

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);