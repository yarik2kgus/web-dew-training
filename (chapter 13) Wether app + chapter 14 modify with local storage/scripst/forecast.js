// website https://developer.accuweather.com/accuweather-current-conditions-api/apis/get/currentconditions/v1/%7BlocationKey%7D

const key = 'mnN90a78XHyOiyW0AWjMEfdbcmVzBnay'

//get city information 
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;


    const request = await fetch(base + query);
    const data = await request.json();

    return data[0]; //[0] - потому что запрос отдает список из предположительных городов, и из списка всех городов этот самый подходящий нашему

};

//get Weatherinformation

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};


//проверка на работоспособность 

// getCity('Arnsberg').then((data) =>{ //цепь промисов 
//         return getWeather(data.Key);
//     }).then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// getWeather("170336").then((data) => {
//     console.log(data);
// });


