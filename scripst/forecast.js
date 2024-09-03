// website https://developer.accuweather.com/accuweather-current-conditions-api/apis/get/currentconditions/v1/%7BlocationKey%7D

//chapter 15 (126) переписываем на OOP (сделали наследование что бы было меньше кода)
class Forecast{
    constructor(){
        this.key = 'mnN90a78XHyOiyW0AWjMEfdbcmVzBnay';
        this.weatherURl = 'http://dataservice.accuweather.com/currentconditions/v1/'; //было base В ф-ции gerWeather
        this.cityURI =  'http://dataservice.accuweather.com/locations/v1/cities/search'; //было base в ф-ции getCity 
    }
    async updateCity(city){
        const cityDets = await this.getCity(city); 
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather };
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const request = await fetch(this.cityURI + query);
        const data = await request.json();
        return data[0]; 
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURl + query);
        const data = await response.json();
        return data[0];
    }
}


// const key = 'mnN90a78XHyOiyW0AWjMEfdbcmVzBnay'

//Legacy код, который поправили  в chapter 15 
// //get city information 
// const getCity = async (city) => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
//     const query = `?apikey=${key}&q=${city}`;


//     const request = await fetch(base + query);
//     const data = await request.json();

//     return data[0]; //[0] - потому что запрос отдает список из предположительных городов, и из списка всех городов этот самый подходящий нашему

// };


//Legacy код, который поправили  в chapter 15 (126) 

//get Weatherinformation

// const getWeather = async (id) => {

//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];

// };


//проверка на работоспособность (не раскоменчивать)

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


