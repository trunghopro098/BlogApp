const Course = require('../models/Course');
const { montipleMongooseToObj,mongoToObj } = require('../../util/mongo');  
const { Error } = require('mongoose');

class CoursesController {
    // get courses in table 
    index(req,res,next){
        Course.find({})
            .then((courses)=>{
                res.render('client\\updateCourses',{
                    courses : montipleMongooseToObj(courses)
                })
            })
            .catch(next);
    }
    // me/courses/:id/edit
    update(req,res,next){
       
        Course.findById(req.params.id)
            .then((courses)=>{
                res.render('client\\formupdateCourses',{
                    courses: mongoToObj(courses)
                })
            })
            .catch(next);
    }
    updataStore(req,res,next){
        Course.updateOne({_id : req.params.id}, req.body)
            .then(()=>res.redirect('/me'))
            .catch(next)
    }

}

module.exports = new CoursesController;