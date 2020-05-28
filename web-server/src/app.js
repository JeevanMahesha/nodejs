const path = require('path')
const express = require('express')

const app = express()
const pathForHTMLPage = path.join(__dirname, '../public')


app.use(express.static(pathForHTMLPage))

app.get('/weather', (req, res) => {
    res.send({
        forcast: 55,
        location: 'Mysore'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000');
})