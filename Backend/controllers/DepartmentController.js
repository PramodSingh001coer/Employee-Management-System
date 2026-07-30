import Department from "../models/Department.js";

// Create Department
export const createDepartment = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Department name is required",
      });
    }

    const exists = await Department.findOne({ name });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Department already exists",
      });
    }

    const department = await Department.create({
      name,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Department Created Successfully",
      department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find().sort({ name: 1 });

    res.status(200).json({
      success: true,
      departments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
