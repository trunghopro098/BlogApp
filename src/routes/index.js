const newsRoute = require('./news');

function route(app){


    app.use('/news', newsRoute);
    
    app.get('/',(req,res)=>{
        res.render('home')
    })
    
    app.get('/test',(req,res)=>{
        res.render('client\\test')
    })

}


module.exports = route;