const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    class: {type : String},
    name: {type : String},
    student_code: {type : String},
    createAt: {type  : Date, default: Date.now},
    updateAt: {type  : Date, default: Date.now}
});

module.exports = mongoose.model('User',User);