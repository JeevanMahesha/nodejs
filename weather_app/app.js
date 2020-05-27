const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=99efb4d483556a155762ae11abd97747&query=12.2958,76.6394&units=f'
request({ 'url': url, 'json': true }, (error, response) => {
    if (error) {
        console.log('Unable to connect the Weather Server!');
    } else if (response.body.error) {
        console.log('Please Give the correct input');
    } else {
        console.log(response.body.current.weather_descriptions + ' Its currently ' + response.body.current.temperature + ' Degree out. it feels like ' + response.body.current.feelslike + ' out');
    }
})

const geocoding_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/mysore.json?access_token=pk.eyJ1Ijoia2Fzb2hvZzIyNyIsImEiOiJja2FubmxsNmgxZnY5MnR0ZDFlNzdvaGxxIn0.jieheCuhmxXXSEC17jKRHQ&limit=1'
request({ 'url': geocoding_url, 'json': true }, (error, response) => {
    if (error) {
        console.log('Unable to connect Weather server!');
    } else if (response.body.features.length === 0) {
        console.log('Please enter the Valid input');
    } else {
        console.log(response.body.features[0].center[1] + ' latitude and ' + response.body.features[0].center[0] + ' longitude');
    }
})