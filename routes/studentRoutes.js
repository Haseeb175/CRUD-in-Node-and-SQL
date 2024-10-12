const express = require('express');
const { getAllStudentController, getStudentByIdController, createStudentController } = require('../controller/studentController');

const router = express.Router();

// Route

// Get all Student list || GET
router.get('/getall', getAllStudentController);

// Get Student by ID || GET
router.get('/get/:id', getStudentByIdController);

// Create Student || POST
router.post('/create', createStudentController);

module.exports = router;