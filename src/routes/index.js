const newsRoute = require('./news');
const coursesRoute = require('./courseRouter');


function route(app){

    app.use('/me',coursesRoute);
    app.use('/news', newsRoute);

    
    app.get('/',(req,res)=>{
        res.render('home')
    })
    
    app.get('/test',(req,res)=>{
        res.render('client\\test')
    })

}


module.exports = route;