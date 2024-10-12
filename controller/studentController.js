const DB = require("../config/db");

// Get All Student List Controller 
const getAllStudentController = async (req, res) => {

    try {
        const data = await DB.query(" SELECT * FROM students");
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "No Student Data Found",
            })
        }
        res.status(200).json({
            success: true,
            message: "Student Data Found",
            data: data[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error in Get All Student API",
            error
        })
    }
};

// Get Student by ID Controller
const getStudentByIdController = async (req, res) => {
    try {
        const studentId = req.params.id;
        if (!studentId) {
            return res.status(404).json({
                success: false,
                message: "Student ID is missing OR Invalid ID"
            })
        }
        const studentData = await DB.query(` SELECT * FROM students WHERE id=?`, [studentId]);
        if (!studentData) {
            return res.status(404).json({
                success: false,
                message: " NO Student Record Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Student Record Found Sucessfully",
            studentData: studentData[0]
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error in Get Student By ID API",
            error
        })
    }
};

// Create Student Controller
const createStudentController = async (req, res) => {
    try {

        const { name, roll_no, fees, classs, medium } = req.body;

        if (!name || !roll_no || !fees || !classs || !medium) {
            return res.status(404).json({
                success: false,
                message: " Please Provide All fields"
            })
        }
        const createStudentData = DB.query(` INSERT INTO students (name, roll_no, fees, classs, medium) VALUES (? , ? , ? , ? , ?)`, [name, roll_no, fees, classs, medium]);

        if (!createStudentData) {
            return res.status(404).json({
                success: false,
                message: " Error in INSERT Query"
            })
        }

        res.status(200).json({
            success: true,
            message: "Student Data INSERT Successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error in Create Student API",
            error
        })
    }
}

module.exports = { getAllStudentController, getStudentByIdController, createStudentController }