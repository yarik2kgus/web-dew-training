//regular functions
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

//arrow function (МНОГО НЮАНСОВ КАК МОЖНО УПРОСТИТЬ ЭТУ ФУНКЦИЮ) если параметр один - можем убрать скобки "()", если нужно "return" что - то простое то из кода можно убрать '{}' и написать блок кода просто в линию без скобок  при том атоматически применяется "returne"
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };



// const area = calcArea(5);
// console.log('area is:', area);


//ТРЕНИРОВКА ПРЕОБРАЗОВАНИЯ ОБЫЧНЫХ ФУНКЦИЙ В ARROW

// const greet = function(){
//     return "hello world"
// }

// const greet = () => "hello world";
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));