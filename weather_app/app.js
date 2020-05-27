const geocoding = require('./utils/geocoding')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (address) {
    geocoding(address, (error, geocodingdata) => {
        if (error) {
            return console.log('Error', error);
        }
        forecast(geocodingdata.latitude, geocodingdata.longtitude, (error, forecastdata) => {
            if (error) {
                return console.log('Error', error);
            }
            console.log({
                'location': geocodingdata.location,
                'description': forecastdata.description,
                'temperatur': forecastdata.temperatur,
                'feelslike': forecastdata.feelslike
            })
        })
    })
} else {
    console.log('Please provide the address');

}