const geocoding = require('./utils/geocoding')
const forecast = require('./utils/forecast')

geocoding('peelamadu', (error, data) => {
    console.log('Error', error);
    console.log('Success', data);
})

forecast(11.03143, 77.01262, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})