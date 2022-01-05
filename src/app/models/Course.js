const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type:String},
    description:{type:String},
    image:{type:String},
    slug:{type:String, slug:'name', unique:true},
    videoId:{type:String},
    lever:{type:String},
    createAt: {type  : Date, default: Date.now},
    updateAt: {type  : Date, default: Date.now}
});

module.exports = mongoose.model('Course', Course);

