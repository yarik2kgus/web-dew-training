const correctAnswears = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswears = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //chack answear
    userAnswears.forEach((answear, index) => {
        if(answear === correctAnswears[index]){
            score +=25;
        }
    });
    
    //show result on page
    scrollTo(0,0); //scroll up
    console.log(score);
    
    result.classList.remove('d-none');

    //animation
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 20);

});


//window object (global object)

// console.log("hello");
// window.console.log('hello'); same





