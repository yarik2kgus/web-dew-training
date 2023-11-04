//variables & block scope
let age = 30;

if(true){
    let age = 40; //можно поменять переменную и не будет ошибки если она внутри другого блока
    let name = "shaun";
    console.log('inside 1st code block: ', age, name);

    if(true){
        //let age = 50;
        console.log('inside seccond code block ', age);//возьмет age c ближайшего блока или с самого себя (это блок в блоке)
    }
}

console.log('outside code block: ', age, name);// не видит name потому что переменная в отдельном блоке