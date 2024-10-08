// import './dom'; //импортирует весь файл dom.js и исполняет его код, но не дает досутпа в index.js использовать какие - либо переменные или функции из dom.js
import {styleBody, addTitle, contact} from './dom'; //читай выше (импортировать и экспортировать ф-ции, массивы и тд надо ЯВНО)
import users, { getPremUsers } from './data'; //импортирует массив из data.js, может содержать любое навание потому что это дефаулт экспорт , в нашем случае "users", тое сть он указан у нас без {}, то есть не явно

const premUsers = getPremUsers(users);
console.log(users, premUsers); //выводит массив "users" из  data.js

console.log('index file');
addTitle('test');
styleBody();
console.log(contact);
