// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms')

//add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();//Обратились к html по id и забрал значение вписанное пользователем
    chatroom.addChat(message) //добавляет в бд новый документ с чатом и сообщением и соответственно оно сразу появляется в чате, потому что у нас стоит лисенер на getchat()
        .then(() => newChatForm.reset()) //очищаем строку формы 
        .catch(err => console.log(err));
});

//update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    // update name via chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName); //обновило имя в константе chatroom, но не записывает ее в бд firebase, а только в LocalStorage, откуда потом  рисваивается в  "const chatroom = new Chatroom('general', username);"
    //reset the form
    newNameForm.reset();
    //show then hide  the update message
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000);
});

//update the chat room (меняет чат в Ui, если мы решили сменить чат)
rooms.addEventListener('click', e =>{
    if(e.target.tagName === 'BUTTON'){ //проверяет что мы нажали именно на кнопку а не прсото на пространство
        chatUI.clear(); // Обращается к экземпляру класса и очищает старый чат если мы переключились на другой чат
        chatroom.updateRoom(e.target.getAttribute('id'));//обновляет комнату обращаясь в index.html и забирая оттуда id
        chatroom.getChats(chat => chatUI.render(chat)); //в конце getChats() мы сохраняем все данные для каждого чата из БД в callback , которые нам передал onSnapshot и теперь  в этой ф-ции используем .render что б ы добавить ее в ui
    }
    e.preventDefault();
})

//check local storage for a name
const username = localStorage.username ? localStorage.username : 'anon'//проверяет есть ли в localstorage уже значение имени ? - проверяет на то существует или нет и потом в переменную username сохраняется значение localStorage.username , если значения нету, то присваивает 'anon'

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);


//get chats and render
chatroom.getChats((data) => { //собираем из бд чаты 
    chatUI.render(data) //вставляем чат в ui
});