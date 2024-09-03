
const list = document.querySelector('ul');
const form = document.querySelector('form');

//130 function for db.collection

const addRecipe = (recipe) => {
    let time = recipe.created_at.toDate(); //высвечивает время когда был обновлен список используя методы обьекста  из db
    let html = `
        <li>
            <div>${recipe.title}</div>
            <div>${time}</div>
        </li>
    `;

    list.innerHTML += html //добавляет в html список рецептов из db в list который отссылает нас на "ul"
}

// 130 main code

db.collection('recipes').get().then((snapshot) => { //отссылает нас к нашей базе данных к конкретной коллекции (db - имеет в index.html коде отссылку на всю базу данных), при этом является асинхронным кодом и возвращает промис
    // when we have the data
    console.log(snapshot.docs[0].data()); // snapshot - то что вернется нам от db при запросе (список коллекции), в котором нас интересуют елементы по ключу docs, а потом используем на элементе метод обьекта .data() что бы вытащить именно информацию о рецетах
    
    snapshot.docs.forEach(doc => { //для парсинка всех элементов коллекции , выше пример только для одного элемента
        console.log(doc.data());
        addRecipe(doc.data()); 
    });
}).catch((err) => {
    console.log(err);
}); 

// 131 add documents (при нажатии add будет добавлять новый элемент в db)

form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now);
    };
})


