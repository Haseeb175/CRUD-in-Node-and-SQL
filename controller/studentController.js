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
}

module.exports = { getAllStudentController }