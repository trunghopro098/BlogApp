const mongoose = require('mongoose');


async function connect() { 
    
    try {
         await mongoose.connect('mongodb://localhost:27017/Myblog');
        console.log('connect sucessfully!') 
     } catch (error) {
        console.log('connect faile!') 
     }




}


module.exports = { connect };