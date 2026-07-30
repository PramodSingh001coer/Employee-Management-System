import Employee from "../models/Employee.js";
import Department from "../models/Department.js";

// Create Employee
export const createEmployee = async (req, res) => {
  try {
    const {
      employeeId,
      name,
      email,
      phone,
      department,
      designation,
      salary,
      joiningDate,
    } = req.body;

    // Check required fields
    if (
      !employeeId ||
      !name ||
      !email ||
      !phone ||
      !department ||
      !designation ||
      !salary ||
      !joiningDate
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check Employee ID
    const employeeExists = await Employee.findOne({ employeeId });

    if (employeeExists) {
      return res.status(400).json({
        success: false,
        message: "Employee ID already exists",
      });
    }

    // Check Email
    const emailExists = await Employee.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Check Department
    const departmentExists = await Department.findById(department);

    if (!departmentExists) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    // Create Employee
    const employee = await Employee.create({
      employeeId,
      name,
      email,
      phone,
      department,
      designation,
      salary,
      joiningDate,
    });

    res.status(201).json({
      success: true,
      message: "Employee Created Successfully",
      employee,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Employees
export const getEmployees = async (req, res) => {
  try {
   const employees = await Employee.find()
  .populate("department")
  .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: employees.length,
      employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get Single Employee
export const getEmployeeById = async (req, res) => {
  try {
   const employee = await Employee.findById(req.params.id)
  .populate("department");
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Employee
export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee Updated Successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Employee
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    await employee.deleteOne();

    res.status(200).json({
      success: true,
      message: "Employee Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};