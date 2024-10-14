const express = require('express');
const { getAllStudentController, getStudentByIdController, createStudentController, updateStudentController, deleteStudentController } = require('../controller/studentController');

const router = express.Router();

// Route

// Get all Student list || GET
router.get('/getall', getAllStudentController);

// Get Student by ID || GET
router.get('/get/:id', getStudentByIdController);

// Create Student || POST
router.post('/create', createStudentController);

// Update Student || PUT
router.put('/update/:id', updateStudentController);

// Delete Student || Delete
router.delete('/delete/:id', deleteStudentController);

module.exports = router;