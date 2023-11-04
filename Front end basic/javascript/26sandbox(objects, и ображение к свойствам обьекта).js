//object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@ninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
};

console.log(user);
console.log(user.name);

//user.age = 35;
console.log(user.age); // через '.age' мы обращаемся к свойству обьекта как в этом примере и в комментарии выше

// const key = 'location';

//console.log(user[key]);// можно обратится к свойству обьекта через [] как в этом примере key представляет собой свойство 'location', но так же можно написать и просто 'location'
console.log(user['location']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);

function outer() {
    const outerVar = 'I am from the outer function';
  
    function inner() {
      console.log(outerVar); // Внутренняя функция использует переменную из внешней функции
    }
  
    return inner;
  }