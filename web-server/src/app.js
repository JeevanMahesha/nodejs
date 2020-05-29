const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const pathForHTMLPage = path.join(__dirname, '../public')
const pathForview = path.join(__dirname, '../templets/views')
const pathForpartials = path.join(__dirname, '../templets/partials')

// setup static directory to server 
app.use(express.static(pathForHTMLPage))

//setuup handlebar engine for view
app.set('views', pathForview);
app.set('view engine', 'hbs');
hbs.registerPartials(pathForpartials)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Jeevan'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Jeevan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help',
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