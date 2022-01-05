
const Course = require('../models/Course');
const User = require('../models/User');
const { montipleMongooseToObj,mongoToObj } = require('../../util/mongo');  
const { Error } = require('mongoose');

class NewsController {

        // // Get /news
        // index(req, res){  //calllback function
        //     Course.find({}, function (err,courses) {
        //         if(!err){
        //             res.json(courses)
        //         }else{
        //             res.status(400).json({err:"error!"});
        //         } 
        //       });
        // }
            //   promise
        index(req, res, next){
            Course.find({})
            .then(courses=>{
                // courses = courses.map(courses=>courses.toObject())
                res.render('home',{
                    courses : montipleMongooseToObj(courses)
                })
            })
            .catch(next)
        }
            
        // get  /news/slug

        show(req,res,next){

            Course.findOne({slug: req.params.slug})
                .then(courses=>{
                    res.render('homeDetail',{
                        courses:mongoToObj(courses)
                    })
                })
                .catch(next);
                
        }


        create(req,res){

            res.render('createhome')
                
        }
        store(req,res, next){
         //create data 
            const formData  = req.body;
            formData.image = `http://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
            const course = new Course(formData);
            course.save()
                    .then(()=>res.redirect('/news'))
                    .catch(Error=>{
                        console.log(error)
                    })

            // res.json(formData)
                
        }

}

module.exports = new NewsController;