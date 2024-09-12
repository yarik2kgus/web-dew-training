
const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

//130 function for db.collection

const addRecipe = (recipe, id) => { //добавляет в ui єлемент из бд //id - урок 132 для удаления элементов
    let time = recipe.created_at.toDate(); //высвечивает время когда был обновлен список используя методы обьекста  из db
    let html = `
        <li data-id="${id}"> 
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button> 
        </li> 
    `; //<button> из  укрока 132 (добавление клавиши для удаления)

    list.innerHTML += html //добавляет в html список рецептов из db в list который отссылает нас на "ul"
}

// 130 get documents


//код до урока 133
// db.collection('recipes').get().then((snapshot) => { //отссылает нас к нашей базе данных к конкретной коллекции (db - имеет в index.html коде отссылку на всю базу данных), при этом является асинхронным кодом и возвращает промис 'recipes' - Название коллекции в нашей БД
//     // when we have the data
//     console.log(snapshot.docs[0].data()); // snapshot - то что вернется нам от db при запросе (список коллекции), в котором нас интересуют елементы по ключу docs, а потом используем на элементе метод обьекта .data() что бы вытащить именно информацию о рецетах
    
//     snapshot.docs.forEach(doc => { //для парсинга всех элементов коллекции , выше пример только для одного элемента
//         console.log(doc.data());
//         console.log(doc.id); // 132 урок (doc.id) - для получения уникального айди каждого жлемента коллекции что бы удалить его потом
//         addRecipe(doc.data(), doc.id);
//     });
// }).catch((err) => {
//     console.log(err);
// }); 


//133 (функция удаления из UI и бд под обновление страницы в реальном времени)
const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    });
}

// 133 get documents(переделанный 130 для автообновление страницы), удаляет или добавляет в ui элементы в реальном вермени

const unsub = db.collection('recipes').onSnapshot(snapshot => { // .onSnapshot - при каждом изменении в db в коллекции отправляет нам список всех элементов из бд
    console.log(snapshot.docChanges()); //.docChanges - отдает массив в котором показаны только ИЗМЕНЕННЫЕ данные (те что удалили/добавили), при первой загрузке страницы будет отдавать массив со всеми данными из бд, от этого будет идти точка отсчета отслеживания изменений
    snapshot.docChanges().forEach(change => { //forEach нужен потому что как и мы можем поменять что - то через ui так и на сервере что - то может измениться и dockchanges отдаст нам массив с этими изменениями
        const doc = change.doc;//отссылает к свойствам .doc нашего конекртного обьекта, потому что change рпосто приведет к общему обьекту js
        console.log(doc);
        if(change.type === "added"){
            addRecipe(doc.data(), doc.id);
        } else if(change.type === "removed"){
            deleteRecipe(doc.id);  
        }
    })
}); //134 добавили const unsub

// 131 add documents (при нажатии add будет добавлять новый элемент в db)

form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('recipes').add(recipe).then(() =>{
        console.log('recipe added');
    }).catch((err) => {
        console.log(err);
    });
});

// 132 remove documents
list.addEventListener('click', e=> {
    if(e.target.tagName === 'BUTTON') { // проверка является ли элемнет на который кликнул юзер кнопокй, что бы он не мог удалить жлемент кликнув просто в обьект тега <li>
        console.log(e);
        const id = e.target.parentElement.getAttribute('data-id'); //отссылает нас к каждому элементу в котором была нажата кнопка и берет из этого элемент id который находится в родительском теге <li>
        console.log(id);
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe deleted')
        }); //отссылкается на документ из коллекции по id и удаляет его, является асинхронным
    }
});

//134 unsub from database changes
button.addEventListener('click', () =>{
    unsub(); //когда мы потворно вызываем функцию, то она опять на БД посылает .onSnaphot, что автоматически отписывает нас от обновлений в реальном времени в бд (это функционал Firebase, при повторном получении .onSnapchot)
    console.log ('unsubscribed from collection question')
});





