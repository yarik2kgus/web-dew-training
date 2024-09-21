//render chat templates to the DOM
//clear the list of chats (when the room changes)

class ChatUI { // макет того как выглядит сообщение в чате
    constructor(list) {
        this.list = list;
    }
    clear(){
        this.list.innerHTML = ''; //  очищает ui от старого чата, если мы сменили чат на другой
    }
    render(data){
        const when = dateFns.distanceInWordsToNow( //метод который преобразует дату в дни ( взят из внешней билиотеки)
            data.created_at.toDate(),
            { addSuffix: true } // +ago
        );
        const html = `
        <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</div>
        </li>
        `;

        this.list.innerHTML += html
    }
}