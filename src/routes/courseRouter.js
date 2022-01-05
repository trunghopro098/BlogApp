const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');
router.put('/:id',coursesController.updataStore)
router.use('/updateCourse/:id/edit',coursesController.update);
router.use('/',coursesController.index);


module.exports = router;