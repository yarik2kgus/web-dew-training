const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateUI = (data) => {
//     console.log(data);
// //создали 2 локальных переменных для удобства, которыйе указывают на обьекты js что бы каждый раз не прописывать длинные строки для шаблона снизу например: "data.cityDets.EnglishName" или "data.weather.WeatherText", когда нам нужна оттуда информация
//     const cityDets = data.cityDets;
//     const weather = data.weather;

//более уоротки вариант того что вверху (107) Destructure properties

const { cityDets, weather } = data; // означает что мы хотим взять именно эти данные и присвоить им именно такие переменные { cityDets, weather },  из (data)  которая нам пришла 

//update details template
details.innerHTML = `
<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
`;

//update  the night/day and icon images

const iconSrc = `img/icons/${weather.WeatherIcon}.svg`; //каждой погоде у нас соответствует 1 из картинок, которые пронумерованы в соответствии со значением .WeatherIcon которое приходит нам от запроса по апи и содержит цифру от 1 до 44 , что соответствует нашим картинкам в папке, так мы динамически меняем картинку зависимо от погоды
icon.setAttribute('src', iconSrc);

//ternary operation 109 (проверка true или false но более удобным способом)

let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'; // если будет = true, то вернет первое значение (слева), если false, то вернет второе значение (справа)
time.setAttribute('src', timeSrc) // установили для референста "const time" источник откуда брать картинку, при условии будет день или ночь 

//remove d-none class if present

if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
}

};


const updateCity = async (city) => {

    const cityDets = await getCity(city); // ф-ции из кода "forecast.js" поскольку она тоже асинхронные , то добавляем await что бы они исполнялись в правильном порядке
    const weather = await getWeather(cityDets.Key); // обе жти ф-ции прописаны в "forecast.js"Ю эта отправляет запрос в котором есть ключ города и получает и-цию про погоду

    return {cityDets, weather};
    // можно просто записать сокращенно, КОГДА НАЗВАНИЕ ЗНАЧЕНИЯ ТАКОЕ ЖЕ КАК И НАЗВАНИЕ СВОЙСТВА  в таком виде:
        // cityDets,
        // weather
    //В ином случае:

    // return {
    //     cityDets: cityDets,
    //     weather: weather
    // };

};

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    //SET LOCAL STORAGE (CHAPTER 14)
    localStorage.setItem('city', city);
});

// chapter 14 proceed (если до этого пользователь делал поиск погоды по определенному городу. то он сохраняется в локальной памяти браузера и при заходе на страничку у нас происходит автоматический запрос по тому же городу который указан в локальной памяти)

if(localStorage.getItem('city')){  // если localStorage с ключем city существует то будет производиться код, если нет то ошибка
    updateCity(localStorage.getItem('city')) // ф-я возвращает промис
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}

