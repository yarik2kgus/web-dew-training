//objects

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@ninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    }, //функция которая относиться к свойствам обьекта является его методом
    logout: function(){
        console.log('user logged out');
    },
    logBlogs: function(){   //тут мы создали свой метод через функцию (НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ СТРЕЛОЧНУЮ ДЛЯ МЕТОДОВ ПОТОМУ ЧТО ТОГДА this ссылается не на user а на "window в браузере", то есть на глобальный)
        //console.log(this.blogs);
        console.log('this user has weitten the following blogs:');
        this.blogs.forEach(blog => {  //this -отссылает нас на уровень выше то есть к user. blogs указывает на то какой конкретно элемент с уровня выше нам нужен. forEach перебирает все элементы в массиве и возвращает до 3х значений каждого элемента массива самое первое это "value"
            console.log(blog);  // "blog =>" это стрелочная функция котора 
        })
    }
    //функции в свойствах обьекта так же можно записывать в таком виде:
    kek(){

    }
};


user.logBlogs();
console.log(this);