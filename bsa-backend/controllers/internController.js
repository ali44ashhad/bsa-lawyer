import InternshipStudent from "../models/internShip.js";

export const createIntern = async (req, res) => {
  try {
    const {
      name,
      email,
      mobileNumber,
      city,
      state,
      college,
      course,
      currentYearOrSemester,
    } = req.body;

    // Check required fields
    if (!name || !email || !mobileNumber || !college) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Check if email already exists
    const existingIntern = await InternshipStudent.findOne({ email });

    if (existingIntern) {
      return res.status(400).json({
        success: false,
        message: "Intern with this email already exists",
      });
    }

    const newIntern = await InternshipStudent.create({
      name,
      email,
      mobileNumber,
      city,
      state,
      college,
      course,
      currentYearOrSemester,
    });

    res.status(201).json({
      success: true,
      message: "Intern created successfully",
      data: newIntern,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllInterns = async (req, res) => {
  try {
    const interns = await InternshipStudent.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: interns.length,
      data: interns,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};