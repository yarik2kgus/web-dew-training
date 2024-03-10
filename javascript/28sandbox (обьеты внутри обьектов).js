//objects

const blogs = [
    {title: 'why mac & cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50},
];

console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@ninja.co.uk',
    location: 'berlin',
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},  //обьект внутри обьекта , то есть мы вместо массива со строчными элементами создали 2 обьекта каждый из которых обозначает свой "блог" что бы в нем могли присутствовать не только строчные эелементы
        {title: '10 things to make with marmite', likes: 50},
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('user logged out');
    },
    logBlogs(){   
        console.log('this user has weitten the following blogs:');
        this.blogs.forEach(blog => {  // forEach передает в качестве аргумента сразу целый массив то есть  "title: 'why mac & cheese rules', likes: 30" и поэтому мы прсото потом в коллбек функции по ключам обращаемся к каждому свойству обьекта по отдельности и нам не нужен еще один параметр в коллбек функции
            console.log(blog.title, blog.likes);  
        })
    }
};


user.logBlogs();
console.log(this);