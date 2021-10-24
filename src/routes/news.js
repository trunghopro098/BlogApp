const express = require('express');
const route = express.Router();

const newcontroller = require('../app/controllers/NewController');


route.use('/news/:id',newcontroller.index);
route.use('/',newcontroller.show);

module.exports = route;

