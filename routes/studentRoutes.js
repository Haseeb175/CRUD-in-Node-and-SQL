const express = require('express');
const { getAllStudentController } = require('../controller/studentController');

const router = express.Router();

// Route

// Get all Student list || GET
router.get('/getall', getAllStudentController)

module.exports = router;