// 115, 116 пример создания обьекта и методов, что бы создать несоклько обьектов разных юзеров нужно с раза в раз копировать ключи и свойства (в этом примере). Методы которые применимы к обьектам можно найти в консоли в строке "prototype"
const userOne = {
    username: 'rju',
    email: 'rju@thenetninja.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};


console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
    username: 'jhon',
    email: 'jhon@thenetninja.com',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};

console.log(userTwo.email, userTwo.username);
userTwo.login();

//пример как можно создавать нового пользователя снова и снова не копируя (нужно создать конструктор, если его нету встроенным в js)

class User {
    constructor(username, email){ // когда создаем класс, то обязательно используем метод constructor, в который вписываем параменты, котрые мы будем передавать в будущем при создании экземпляра класса
        //set up properties
        this.username = username;
        this.email = email;
        this.score = 0
    }
    //определяем методы обьекта (методы определяются после ф-ции 'constructor" и только регулярными ф-циями, потому что при использованиии .this стрелочная ф-ция отссылается на гр=лобальное окно)
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has ascore of ${this.score}`);
        return this; // нужно для того что бы создать цепочку методов, потому что будет возваращать нам этот обьект назад с результатом для обработки в следующий метод, без return просто вернет undefined
    }
}

const user1 = new User('mario', 'mario@gmail.com');
const user2 = new User('luigi', 'luigi@gmail.com');

//the 'new' keyword
//1 - it creates a new empty object {}
//2 - it binds the value of 'this' to the new empty object
//3 - it calls the constructor function to 'build' the object 


console.log(user1, user2);
user1.login();
user2.logout();

//chaining of methods нужен return this в конце метода (см. выше)
user1.incScore().incScore();

// 120, 121 Class inheritance (на основе существующего класса создаем другой с дополнительными методами методами и тд), например Admin, на основе класса User

class Admin extends User{ //наследут совйства и методы от класса User
    constructor(username, email, title){
        super(username, email) //если у нас есть новые свойства, то обязательно прописывать новый constructor, при этом что бы новый класс взял свойства наследуемого нужен метод super()  внутри которого будут свойства которые мы хотим наследовать
        this.title = title
    }
    deleteUser(user){ //добавили дополнительный метод только для этого класса
        users = users.filter((u) => { 
            return u.username !== user.username//если user = u, то вернет fallse, потому что нам нужно убрать этого пользователя(.filter  создает новый массив в который включает только то что прошло проверку, потому мы и поставили условие !== )
        });
    }
}

const user3 = new Admin('schaun', 'admin@gmail.com', 'black-belt');
console.log(user3);

let users = [user1, user2, user3];
console.log(users);
user3.deleteUser(user2); //только User3 является админимтратором и имеет такой метод
console.log(users); //покажет массив с уже удаленным пользователем "user2"

console.log(user3); // проверка добавленных свойств в admin

//122 - 124 constructor under the hood, показывает что происходит под капоттом у "class" (переписывание класса в виде ф-ции, но в норме ипользуют class), на самом деле в js все реализуется через прототипы, но названно это "class", для удобства
function Userr(username, email) {
    this.username = username;
    this.email = email;

    //Добавление метода (неправильно)
    // this.login = function(){ //эта функция не будет находится в прототипе, то есть не будет наследоваться, а создаваться каждый раз по новой 
    //     console.log(`${this.username} has logged in`); 
    // };
};

Userr.prototype.login = function(){//таким образом метод будет всегда наследоваться, решает проблему выше
    console.log(`${this.username} has logged in`);
    return this;
};

Userr.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this; // нужно что бы создать цепочку методов
};

//124 Prototipe inharitance (как наследовать без super(), тут метод super() недостп=упен, потому что мы не использовали class, а создали его функцией)
function Adminn(username, email, title){
    Userr.call(this, username, email)//this - вызывает Userr с контекстом текущего обьекта Admin, Когда вы вызываете Userr.call(this, username, email), вы фактически говорите: "Вызови конструктор Userr, но сделай так, чтобы внутри него this ссылался на текущий объект Adminn, который мы создаем". Это позволяет Userr инициализировать свойства username и email для объекта Adminn.
    this.title = title; // свойство только для Aminn
}
//наследуем методы от Userr к Adminn
Adminn.prototype = Object.create(Userr.prototype);

//создание метода только для Adminn
Adminn.prototype.deleteUser = function(){
    //delete a user
};



const user4 = new Userr('mario', 'mario@gmail.com');
const user5 = new Userr('luigi', 'luigi@gmail.com');
const user6 = new Adminn('danil', 'danil@gmail.com', 'black-belt-ninja');

console.log(user4, user5, user6);
user4.login();
user4.login().logout(); //цепочка методов

//125 Built-in Objects (in wether app chapter 13), все что является обьектом в Js наследует свойтва класса Object автоматически , то есть new Array() - обьект, и в консоли если развернем протоип в конце увидим что он наследует свойсва от Object, от new Object(), так же обьект new XMLHttpRequest() и остальные
//126 (chack in Weather app, chapter 13 forecast.js)