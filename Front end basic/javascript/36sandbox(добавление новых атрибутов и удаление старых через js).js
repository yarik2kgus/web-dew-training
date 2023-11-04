const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;') ЕСЛИ НАПИСАТЬ ТАК, ТО БУДЕТ СТАЙЛ ТОЛЬКО MARGIN , А ЦВЕТ КОТОРЫЙ У НАС ПРОПИСАН СВОЙСТВОМ УЖЕ В HTML ПРОПАДЕТ, ТО ЕСТЬ ОН ПРИЙМЕТ ТОЛЬКО ОДНО СВОЙСТВО   margin

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px'; //так мы обращаемся к конкретному тегу и к конкретному его свойству и просто добавляем новое или корректируем старое , так он может принимать сразу несколько свойств
title.style.color = 'crimson';

//"font-size:" - в CSS , но в js
title.style.fontSize = '60px';
title.style.margin = '';// если написать пустую "" то свойсво просто обнулится
