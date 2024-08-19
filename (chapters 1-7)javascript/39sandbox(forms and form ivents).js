//Search elemen thet we need in HTML 
const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = document.querySelector('#username'); //search firsl element by id


form.addEventListener("submit", e => {
    e.preventDefault();
    // console.log(username.value); //search variable which search our element by id and show it in console log
    console.log(form.username.value); // easeer way to search element by id 

    //Validation
    const username = form.username.value;

    if (usernamePattern.test(username)){
        //feedback good info
        feedback.textContent = "taht username is valid!";
    } else {
        //feedback help info
        feedback.textContent = "username must contain letters only and be between 6 and 12 characters long";
    }

});

//live feedback (проверка в риалтайм)
form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value); //it is show in console same  first show what did you type on keyboard for activate invent second variant better
    if(usernamePattern.test(e.target.value)){ //"e.target.value" проверяет в реально времени значение вписанного
        form.username.setAttribute('class', 'successvalidation');
    } else {
        form.username.setAttribute('class', 'errorvalidation');
    }
});

    //TESTING RegularExpression all regular expression contain inside "//"

    const username = "shaun";
    const pattern = /^[a-z]{6,}$/  // pattern for check that our username appropriate "^ и $" в начале и конце означают что все должно состоять из букв

    let result = pattern.test(username); // method .test always used with Regular Expression for check out

    if(result){
        console.log('regex test passed :)')
    }else {
        console.log ('regex test failed :(')
    }

    // let result = username.search(pattern);   // search possition of the match and return integer 0 or -1 or other (ищет с какого момента есть совпадение)
    // console.log(result);
