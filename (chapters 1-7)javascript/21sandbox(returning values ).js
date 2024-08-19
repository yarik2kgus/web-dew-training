//returning values 

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

const calcArea = function (radius){
    // let area = 3.14 * radius**2;
    // return area;
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log(area);

const calcVol = function(kek){
    return kek * area;
}; // можем использовать результат прошлой функции как аргумент для нынешней, сам результат смогли получить благодаря return

const a = calcVol(3);

console.log(a);