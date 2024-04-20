//dates and time
const now = new Date();

    //1
console.log(now);
console.log(typeof now);

// years, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

//timestamps (отсчет времени от 1 января 1970 до сегодня в секундах)
console.log('timestamp:', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
    //2
const before = new Date('February 1 2019 7:30:59');

//console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);// разница между сегодняшним "now" днем и датой описанной в "befor"

const mins = Math.round(diff / 1000 / 60); // разница в минутах
const days = Math.round(diff / 1000 / 60 / 60 / 24); //разница в днях

console.log(days);

console.log(`the blog war weitten ${days} days ago`);

//converting timestamps into date objects
const timestamp = 161074937207;
console.log(new Date(timestamp)); // переводит секунды в дату

//Digital clock

const clock = document.querySelector(".clock");

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span> 
    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);