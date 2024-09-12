// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    // adding new chat documents
    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }; // обьект который соостветствует форме обьектов которые будут сохраняться в бд       
        //save the chat document
        const response = await this.chats.add(chat); // сохраняет данные "const chat" часа в бд
        return response; //возвращает промис 
    }
    // setting up a real-time listener to get new chats
    getChats(callback){
        this.chats
        .onSnapshot(snapshot => { //если что -то меняется в бд то бд передает список ВСЕХ элементов из БД
            snapshot.docChanges().forEach(change => {
                snapshot.docChanges().forEach(change => { //.docChanges - дает массив только ИЗМЕНЕННЫХ элементов из бд
                    if(change.type === 'added'){
                        //update the ui
                        callback(change.doc.data());
                    }
                });
            });
        })
    }
}

const chatroom = new Chatroom('gaming', 'schaun');
console.log(chatroom);

chatroom.addChat('hello everyone')
    .then(() => console.log('chat added'))
    .catch((err) => console.log(err));

chatroom.getChats((data) =>{
    console.log(data)
});