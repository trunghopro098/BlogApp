const express = require('express');
const route = express.Router();

const newcontroller = require('../app/controllers/NewController');


route.get('/create',newcontroller.create);
route.post('/store',newcontroller.store);
route.get('/:slug',newcontroller.show);
route.use('/',newcontroller.index);


module.exports = route;

