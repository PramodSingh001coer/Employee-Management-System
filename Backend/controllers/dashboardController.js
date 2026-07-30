import Employee from "../models/Employee.js";
import Department from "../models/Department.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalEmployees = await Employee.countDocuments();

    const totalDepartments = await Department.countDocuments();

    const activeEmployees = await Employee.countDocuments({
      status: "Active",
    });

    const inactiveEmployees = await Employee.countDocuments({
      status: "Inactive",
    });

    res.status(200).json({
      success: true,
      totalEmployees,
      totalDepartments,
      activeEmployees,
      inactiveEmployees,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};