const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=99efb4d483556a155762ae11abd97747&query=12.2958,76.6394&units=f'
request({ 'url': url, 'json': true }, (error, response) => {
    console.log(response.body.current.weather_descriptions + ' Its currently ' + response.body.current.temperature + ' Degree out. it feels like ' + response.body.current.feelslike + ' out');
})