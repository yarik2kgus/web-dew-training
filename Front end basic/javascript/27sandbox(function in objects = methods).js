//Objects (function in objects = methods)

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
    logBlogs: function(){
        console.log(blogs);
    }
};

user.login();
user.logout();

const name = 'mario';
name.toUpperCase();