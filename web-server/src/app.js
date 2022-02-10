const path = require('path');
const express = require('express')

const app = express()
// set path to public folder for dynamic files
app.use(express.static(path.join(__dirname, '../public')))
// set view path
app.set('views', path.join(__dirname, '../views'));
// set view engine
app.set('view engine', 'hbs')

app.get('', function (req, res) {
    res.render('index', { title: 'Home' })
})
app.get('/about', function (req, res) {
    res.render('about', { title: 'about' })
})

app.get('/help', function (req, res) {
    res.render('help', { title: 'help' })
})

app.listen(3000)