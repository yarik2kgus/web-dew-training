// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

//add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();//Обратились к html по id
    chatroom.addChat(message) //добавляет в бд новый документ с чатом и сообщением и соответственно оно сразу появляется в чате, потому что у нас стоит лисенер на getchat()
        .then(() => newChatForm.reset()) //очищаем строку формы 
        .catch(err => console.log(err));
});

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'schaun');


//get chats and render
chatroom.getChats((data) => { //собираем из бд чаты 
    chatUI.render(data) //вставляем чат в ui
});