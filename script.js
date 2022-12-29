let input = document.querySelector('#input-1');
let form = document.querySelector('#wheatherForm');
// let stateName = document.querySelector('#stateName');
// let countyName = document.querySelector('#countyName');
let cityName = document.querySelector('#cityName');
form.addEventListener('submit', getWheatherDetails);

function getWheatherDetails(e) {
    e.preventDefault();
    let userValue = input.value;
    const API_KEY = '5197094309ef61333914d938f6fa1283';
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userValue}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            let lat = data[0].lat;
            let lon = data[0].lon;
            if (lat != "" && lon != "") {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
                    .then((response) => response.json())
                    .then((data) => {
                        let temp = data.main.temp;
                        let city = data.name;
                        let clouds = data.clouds.all;
                        let humidity = data.main.humidity;
                        let wind = data.wind.speed;

                        document.querySelector('#temp').innerHTML = temp;
                        document.querySelector('#city').innerHTML = city;
                        document.querySelector('#clouds').innerHTML =clouds;
                        document.querySelector('#humidity').innerHTML = humidity;
                        document.querySelector('#wind').innerHTML = wind;
                    });
            }
        });
}


