// const content = document.querySelector('p');//выбрали первый элемент по тегу

// console.log(content.classList); //вывели в консоль все классы тега
// content.classList.add('error'); //создали новый класс тегу, или добавили текст к существующему
// content.classList.remove('error');//удалили класс который добавили 
// content.classList.add("success");// Добавили новый класс тегу
 
//Задача что бы все желменты где есть successe рпинимали класс success и наоборот с error

// const kek = document.querySelectorAll('p');
// console.log(kek);

// kek.forEach(text => {
//     const lol = text.textContent
//     if(lol.includes("success")){
//         text.classList.add('success')
//     }
//     else {
//         text.classList.add('error')
//     }
// }); //мой способ решения  
// Innertext не подойдет потому что он показывает текс с учетом стиля , то есть если текст скрыт , то мы его не увидим, а  textContent показывает все 

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success')
    }
}); //способ решения из видео
// Innertext мнее подходящий 

const title = document.querySelector('.title');


//toggle - переключать
title.classList.toggle('test');//добавили класс
title.classList.toggle('test');//удалили класс

