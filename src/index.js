const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const { log } = require('console')
const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
log('views', path.join(__dirname, 'resources', 'views'))
log(__dirname)

app.get('/', (req, res)  => {
    res.render('home')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
