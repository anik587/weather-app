const express = require('express')
const path = require('path')
const hbs = require('hbs')

const { getLocation,getWeather}  = require('./utils/index')

const app = express()
const PORT = process.env.PORT || 3001

const viewPath = path.join(__dirname, '../src/templates/views')
const partialPath = path.join(__dirname, '../src/templates/partials')
const publicPath = path.join(__dirname, '../src/public')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

const staticDirectory = express.static(publicPath)
app.use(staticDirectory)


app.get(['/'], (req, res)=>{
    res.render('index');
})


app.get('/help', (req, res) => {
    res.render('help')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('*', (req, res) => {
    res.render('404')
})


app.listen(PORT, ()=>{
    console.log('weather app started at port'+ PORT)
})
