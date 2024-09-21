// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    // adding new chat documents (добавляем новый чат в бд)
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
        const response = await this.chats.add(chat); // сохраняет данные из "const chat" чата в бд
        return response; //возвращает промис 
    }
    // setting up a real-time listener to get new chats 
    getChats(callback){
        this.unsub = this.chats // сохранили в эту переменную ф-цию отписки (то есть тут находится ф-ция которая потом отписывает нас от обновлений если это понадобиться в ф-ции "UpdateRoom()"")
        .where('room', '==', this.room)//.where дает возможность выбрать определенный документ коллекции где определенное значение = true (в нашем случае если мы передали в room значение "gaming", то в консоль выведет только сообщения для чата gaming)
        .orderBy('created_at') //сортирует сообщения в чате по времени их отправки, для такой сортировки потребуется создание index в bd(на странице firebase), индекс необходим для быстрого доступа к определенному жлементу бд
        .onSnapshot(snapshot => { //если что -то меняется в бд то бд передает список ВСЕХ элементов из БД, ПРИ ЭТОМ КОГДА Я ПЕРВЫЙ РАЗ ЗАПУСКАЮ САЙТ, ТО  .onSnapshot ПЕРЕДАЕТ МНЕ ВСЕ ДОКУМЕНТ/СООБЩЕНИЯ ИЗ ЧАТА, ПОЖТОМУ СТАРЫЕ СООБЩЕНИЯ ТОЖЕ ОТОБРАЖАЮТСЯ, ПОТОМУ ЧТО ПРИ ПЕРВОЙ ЗАГРУЗКЕ ВСЕ ДОКУМЕНТЫ БУДУТ ИМЕТЬ СВОЙСТВО "added" И БУДУТ СЧИТАТЬСЯ НОВЫМИ
            snapshot.docChanges().forEach(change => { //.docChanges - дает массив только ИЗМЕНЕННЫХ элементов из бд
                    if(change.type === 'added'){
                        //update the ui
                        callback(change.doc.data());// если есть измененные данные в бд (новые чаты), то отправляет все изменения в  "getChats(сюда)"
                    }
                });
            });
        }
        //update username
        updateName(username){
            this.username = username;
            localStorage.setItem('username', username); //что бы сохранялся никнейм измененный даже после F5
        }

        //update room
        updateRoom(room){
            this.room = room;
            console.log('room updated')
            if(this.unsub){
                this.unsub();// отписываемся от старой комнаты, после того кака мы подписались на новую, если проверка обнаружила что мы переключились на другую комнату (свойство фаербейс, потмоу что мы отправили ему ф-цию которая была в Onsnapshot, которая в случае отправки выключате лисенер)
            }
        }
    }

// chatroom.addChat('hello everyone') //создали новый чат и сохранили в бд , если раскоментить , то каждое обновление страницы будет новый элемент в бд
//     .then(() => console.log('chat added'))
//     .catch((err) => console.log(err));