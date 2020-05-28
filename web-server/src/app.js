const path = require('path')
const express = require('express')

const app = express()
const pathForHTMLPage = path.join(__dirname, '../public')

app.use(express.static(pathForHTMLPage))
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Jeevan'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forcast: 55,
        location: 'Mysore'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})