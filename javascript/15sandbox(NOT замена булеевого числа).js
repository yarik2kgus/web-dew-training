//logical NOT (!) запускает действие или код, меняю булевое значение фалс на тру и наоборот, то есть при использовании циклов, что б он исполнятлся нужен "тру", на "фолс" он не исполняется и вот этот логический опператор меняет значение
let user = false;

if(!user){
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);