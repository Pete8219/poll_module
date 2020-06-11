const express = require('express')
const router = require('./router')


const app = express()

app.use('/', router)
app.use(express.static('views'))
app.use(express.static('adminviews'))


app.set('views', './views/')

app.set('view engine', 'ejs')


app.listen(3000, function() {
    console.log('Example app listening port 3000')
})

