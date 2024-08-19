// Предисловие: 
//Помис имеет только 3 состояния, из которых выполнится 2 , промис - всегда асинхронно, await нужен что бы подождать пока промис получит результат и мы могли им пользоваться в коде, иначе мы получим без await сам промис в состоянии "pending":
// Pending (Ожидание): Промис создан, но еще не завершен (ни успех, ни ошибка).
// Fulfilled (Исполнен): Промис успешно завершен и возвращает результат.
// Rejected (Отклонен): Промис завершился с ошибкой.
//Сетево запрос fetch - возвращает ПРОМИС который имеет 2 состояни я и сам определяет выполнен запрос или нет, 
//функции с атрибутом async - тоже возвращает ПРОМИС
//метод .json - так же вернет ПРОМИС
//XMLHttpRequest  в свою очередь надо детально прописывать он более устаревший 

////87 Async code in action

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log("callback function fired");
// }, 2000); // является асинхронным методом и в консоли выведет надпись в самом конце потому что выоплняется в отдельном пространстве параллеьно , не мешая испольняться другому коду

// console.log(3);
// console.log(4);

// //89,90 Making HTTP Request
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () =>{
//     //console.log(request, request.readyState); 
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request, request.responseText); //отследивает все стадии запроса, лисенер нужен что бы получить данные в консоль и их использовать, иначе запросы будут видны только во вкладке "сеть"
//     } else if(request.readyState === 4){
//         console.log('could not fetch the data')
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // показывает куда отправлять запрос и какой вид запроса
// request.send(); //инициализирует запрос

////91 callback function

// console.log(1);
// console.log(2);


// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () =>{ 
//         if(request.readyState === 4 && request.status === 200){
//             callback(undefined, request.responseText);
//         } else if(request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); 
//     request.send();
// };

// getTodos((err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     }else {
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4); // демонстрация "асинхронности", (результат по ф-ции будет в самом конце, хотя она выше)

////91 Json data

// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () =>{ 
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });
    
//     request.open('GET', 'todos.json'); 
//     request.send();
// };

// getTodos((err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     }else {
//         console.log(data);
//     }
// });

// //93 callback hell (если нужно обработать сразу несколько json файлов друг за другом последовательно)

// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () =>{ 
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });
    
//     request.open('GET', resource); 
//     request.send();
// };

// getTodos('luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });

//94 Promise Basics (если нужно получить данные из разных json, то мы не делаем вложенные ф-ции, а ишем промисы) альтернатива для части 93 


//promise example

// const getSomething = () => {
//     return new Promise((resolve, reject) => {    // resolve и reject встроенны автоматически в API js  в промисы
//         // fetch something
//         resolve('some data');
//         //reject('some error');
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// });

//менее грязный вариат того что вышел

// getSomething().then(data => {
//     console.log(data); 
// }).catch(err => {
//     console.log(err);
// });


// // нормальный вариант
// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () =>{ 
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if(request.readyState === 4){
//                 reject('error getting resource');
//             }
//         });
        
//         request.open('GET', resource); 
//         request.send();
//     });
// };

// getTodos('luigi.json').then((data) => {
//     console.log('promise resolved:', data);
// }).catch((err) =>{
//     console.log('promise rejected', err)
// });

// // 95 chaining promise

// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () =>{ 
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if(request.readyState === 4){
//                 reject('error getting resource');
//             }
//         });
        
//         request.open('GET', resource); 
//         request.send();
//     });
// };


// // вместе callback hell можно запистаь цепь промисов

// getTodos('luigi.json')
// .then((otvet) => {    // .then срабатывает только на resolve (особености промисов)
//     console.log('promise 1 resolved:', otvet); // otvet/data - просто параметр в который мы передаем аргументом  resolve (data)
//     return getTodos('mario.json'); // return используется, потому что он не дает начать обрабатывать новый промис пока не завершиться обработка прошлого и таким образом можно контролировать какой json будет обрабатываться следующим, если протсо писать "getTodos('mario.json');", то все промисы могут выполниться паралельно или произвольно
// })
// .then((data) =>{
//     console.log('promise 2 resolved', data);
//     return getTodos('todos.json');
// })
// .then((data) => {
//     console.log('promise 3 resolved', data);
// })
// .catch((err) =>{
//     console.log('promise rejected', err); // .catch срабатывает на все что reject, для всех ступенек, если 2я ступенька получает ошибку, то 3 не инициируется
// });



// // 96 fetch api (современный способ котрый делате то же что и прошлый вариант, но "под капотом")

// fetch('luigi.json') // возвращает промис в котором показывает "err" для catch, но только если есть ошибка сети, в ином случае вернет тот же "responce" в .then где просто будет статус "200"
// .then((response) =>{
//     console.log("resolved", response);
//     return response.json(); // встроенный метод для fetch которы парсит json и переводит в формат js, возвращает промис пожтому нужен еще один .then
// })
// .then((data) => {
//     console.log(data); // используем 2 раза then что бы вывести результат из "return response" (стандарт)
// })
// .catch((err) => {
//     console.log("rejected", err);
// });

// //97 async and Await
// const gettodos = async () => { // асинхронная ф-я, всегда возвращает промис

//     const response = await fetch('luigi.json'); // await - заменяет .then и позволяет избежать нагромождений .then и получить сразу доступ к результату промиса, то есть без await за счет асинхронности посколько js не ожидает завершения промиса мы просто получим сам промис в состоянии Pending, а с await, мы дожидаемся результата и присваиваем переменной сам результат
//     const data = await response.json(); // .json тоже вернет промис

//     return data 

// };

// console.log(1)
// console.log(2)

// gettodos()
// .then(data => { // используем .then потому что ф-я с async, в нашем случае переменная "gettodos" возвращает всегда тоже Промис, и что бы забрать позитивный результат, нужен метод .then
//     console.log('resolved:', data);
// }).catch((err) => console.log('rejected', err));

// console.log(3)
// console.log(4)

//98 custom errors (тот же код что в 97) with .catch (кастомные  ошибки нужны, потому что промис от fetch не сомтря на ошибку выбьет resolveed, и мы не сможем найти в чем проблема, анпример если указан не тот ресурс .json, то ошибка будет в методе , хотя на самом деле ошибка в названии ресурса)

const gettodos = async () => {

    const response = await fetch('luigis.json'); 

    if(response.status !==200){
        throw new Error('cannot fetch the data'); //Ключевое слово throw используется для генерации исключения (ошибки) в коде. Когда оно выполняется, выполнение кода прекращается и передается управление в ближайший блок catch (если он есть). Без блока catch выполнение программы прервется. new Error это встроенный конструктор в JavaScript, который создает объект ошибки с указанным сообщением.
    }
    
    const data = await response.json(); 

    return data 

};

gettodos()
.then(data => { 
    console.log('resolved:', data);
}).catch((err) => console.log('rejected', err.message)); // .message - метод который взаимодействует с конструктором "new Error" что бы вывести саму ошибку

