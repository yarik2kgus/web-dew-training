//reduce (свертывает масси в одно число , берет a  с результата суммирования прошлых ичсел , а b является тем числом из массива которое мы прибавляем потом к a сначала 1 + 0, потом 1 + 2 потом 3 + 3, и так даллее по массиву)
var array = [1,2,3,4,5];
sum = array.reduce((a, b) => {
    return a + b;
})
console.log(sum);

//filter (отсеивает в массиве числа по позитивному или негативному значению) 
var kek = [1,-2,3,-4,5];

var positiveArray = kek.filter(num => {
    return num > 0;
})
console.log(positiveArray);

//map (проходит каждый элемент массива применяя к нему каллбек функцию и создает новый массив на основе этого, то есть у нас по сути перемножает все на 2)
var ar = [1,4,9];

var newarray = ar.map(num => {
    return num * 2;
})
console.log(newarray);

//every и some (every проверяет совпадает ли условие со ВСЕМИ элементами массива и возвращает true или false, some проверяте и если хоть одно значение подходит, то возвращает true и если ниодно не подходит то false )
var ok = [1,4,9,-2,3];
const func = pos => {
    return pos > 0;
}
console.log(ok.every(func));
console.log(ok.some(func));