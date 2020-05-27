const request = require('postman-request')

const geocoding = (location_address, callback) => {
    const geocoding_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location_address) + '.json?access_token=pk.eyJ1Ijoia2Fzb2hvZzIyNyIsImEiOiJja2FubmxsNmgxZnY5MnR0ZDFlNzdvaGxxIn0.jieheCuhmxXXSEC17jKRHQ&limit=1'
    request({ 'url': geocoding_url, 'json': true }, (error, response) => {
        if (error) {
            callback('Unable to connect Weather server!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find Loction, Try another search', undefined);
        } else {
            callback(undefined, {
                'latitude': response.body.features[0].center[1],
                'longtitude': response.body.features[0].center[0],
                'location': response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocoding