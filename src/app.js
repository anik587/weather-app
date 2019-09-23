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


app.get('/', (req, res)=>{
    res.render('index',{
        info: 'Nature is the mother',
        date: new Date 
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        info: 'Help',
        content: 'Ask for help here anik587@gmail.com'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        info: 'About',
        content: 'This is a simple weather app build on node js using express and hbs'
    })
})

app.get('*', (req, res) => {
    res.render('404')
})


app.listen(PORT, ()=>{
    console.log('weather app started at port'+ PORT)
})
