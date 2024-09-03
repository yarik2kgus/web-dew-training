//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue //когда значение в массиве "0" часть кода ниже не исполняется соответственно в консоли не отображается 0 и просто пропускается ( то есть код ниже показывает в консоли значение, но мы его проигнорировали этой командой)
    }

console.log('you score:', scores[i])

if(scores[i] ===100){
    console.log('congrat you got the top score!')
    break
}

}
