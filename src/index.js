const express = require("express")
const path = require('path')
const morgan = require("morgan")
const handlebars = require('express-handlebars')
const methodOverride = require('method-override');
const app = express()
const port = 3002
const route  = require('./routes')
const db = require('./config/db')
// caaus hinhf public
app.use(express.static(path.join(__dirname,"public")))
// http 
// connect db
db.connect();
// get dữ liệu từ form theo method POST
app.use(express.urlencoded({extended: true})) 
app.use(express.json())

app.use(morgan('combined'));
app.use(methodOverride('_method'));
// temaplate engine
app.engine('hbs',handlebars({
    extname : '.hbs',
    helpers: {
        sum:(a,b)=>a+b,
    }
}))
app.set('view engine','hbs')
// set laij path
app.set('views',path.join(__dirname,'resources\\views'))
// console.log("path : ",path.join(__dirname,'resources\\views'))
route(app);

app.listen(port,()=>{
    console.log(`Example listening at http://localhost:${port}`)
})