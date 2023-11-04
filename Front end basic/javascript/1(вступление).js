//strings
console.log('hello worls');

let email = 'mario@gmail.com';
console.log(email)

//strings concatenation
let firstname = 'Brandon';
let lastname = 'Sandarson';

let fullName = firstname + ' ' + lastname;
console.log(fullName)

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result, fullName);

let index = email.indexOf('@')
console.log(index)


function myFunc (callback) {
    const a = [1,2,3]
    let element = document.querySelector('.out-1');
    callback(element, a);
}

function out(elem, arr) {
    elem.innerHTML = arr.join("-");
}

myFunc(out);