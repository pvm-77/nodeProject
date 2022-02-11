const path = require('path');
const hbs=require('hbs');
const express = require('express');
const { response } = require('express');

const app = express()
// set path to public folder for dynamic files
app.use(express.static(path.join(__dirname, '../public')))
// set path to views folder for dynamic files
const partialPath = path.join(__dirname, '../templates/partials')
const viewsPath=path.join(__dirname, '../templates/views')   
// set view path
app.set('views', viewsPath);
// set view engine
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath);


app.get('', function (req, res) {
    res.render('index', { title: 'Home',author:'sarfaraz' })
})
app.get('/about', function (req, res) {
    res.render('about', { title: 'about',author:'sarfaraz' })
})

app.get('/help', function (req, res) {
    res.render('help', { title: 'help',author:'sarfaraz' })
})

app.get('*',(request,response)=>{
    response.render('404',{title:'404',
    errorMessage:'Page not found',author:'sarfaraz'})
})

app.listen(3000)