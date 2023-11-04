//function declaration (можно обьявить ее в любом месте через 'greet' потому что применяется "Хойстинг")
function greet(){
    console.log('hello there');
}

//function expression (функция не будет видна если обьявить ее через переменную "speack" до того как она появляется в списке)
const speak = function(){
    console.log('good day!');
};

// greet();
// greet();
// greet();

speak();
speak();
speak();
