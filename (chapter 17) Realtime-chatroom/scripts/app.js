// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

//add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault
    const message = newChatForm.message.value.trim();//Обратились к html по id
    
});

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'schaun');


//get chats and render
chatroom.getChats((data) => { //собираем из бд чаты 
    chatUI.render(data) //вставляем чат в ui
});