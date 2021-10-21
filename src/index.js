const express = require("express")
const path = require('path')
const morgan = require("morgan")
const handlebars = require('express-handlebars')
const app = express()

const port = 3000

// caaus hinhf public
app.use(express.static(path.join(__dirname,"public")))
// http 
app.use(morgan('combined'))
// temaplate engine
app.engine('hbs',handlebars({
    extname : '.hbs'
}))
app.set('view engine','hbs')
// set laij path
app.set('views',path.join(__dirname,'resources\\views'))
// console.log("path : ",path.join(__dirname,'resources\\views'))


app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/news',(req,res)=>{
    res.render('news')
})
app.get('/test',(req,res)=>{
    res.render('client\\test')
})

app.listen(port,()=>{
    console.log(`Example listening at http://localhost:${port}`)
})