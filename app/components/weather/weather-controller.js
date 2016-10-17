(function () {

    var wc = this;
    var weatherService = new WeatherService();

    weatherService.getWeather(updateWeather)

    function updateWeather(data) {
        var results = JSON.parse(data)
        var weatherElem = $('#weather')
        var tempK = results.main.temp
        var tempF = tempK * (9 / 5) - 459.67
        var tempC = (tempF - 32) * (5 / 9)
        tempC = Math.ceil(tempC)
        tempF = Math.ceil(tempF)
        var weatherTemplate = '';
        weatherTemplate += `
        <div class="text-center cardWeather">
            <h2>${results.name}</h2>
            <h1 id="c-temp">${tempC}° C</h1><h1 id="f-temp">${tempF}° F</h1>            
            <img src="http://openweathermap.org/img/w/${results.weather[0].icon}.png">
            <h3>${results.weather[0].description}</h3>                    
        </div>`

        weatherElem.append(weatherTemplate)

        $('#c-temp').hide();

        $('#weather').on('click', function () {
            $('#c-temp').toggle();
            $('#f-temp').toggle();
        })
    }
} ())