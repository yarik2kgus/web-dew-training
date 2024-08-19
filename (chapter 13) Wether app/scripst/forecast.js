const key = 'mnN90a78XHyOiyW0AWjMEfdbcmVzBnay'

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;


    const request = await fetch(base + query);
    const data = await request.json();

    return data[0];

};

getCity('Arnsberg')
    .then((data) =>{
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });