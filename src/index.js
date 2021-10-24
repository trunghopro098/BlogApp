const express = require("express")
const path = require('path')
const morgan = require("morgan")
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const route  = require('./routes')
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
route(app);

app.listen(port,()=>{
    console.log(`Example listening at http://localhost:${port}`)
})