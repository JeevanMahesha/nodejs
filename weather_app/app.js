const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=99efb4d483556a155762ae11abd97747&query=37.8267,-122.4233'
request({ 'url': url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current);

})