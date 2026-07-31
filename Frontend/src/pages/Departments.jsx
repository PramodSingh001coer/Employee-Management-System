import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const { data } = await API.get("/departments");

      if (data.success) {
        setDepartments(data.departments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Departments</h1>

        <Link
          to="/departments/add"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          + Add Department
        </Link>
      </div>

      {/* Table */}
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3">Department</th>
            <th className="border p-3">Description</th>
          </tr>
        </thead>

        <tbody>
          {departments.length > 0 ? (
            departments.map((department) => (
              <tr key={department._id}>
                <td className="border p-3">{department.name}</td>
                <td className="border p-3">
                  {department.description}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="2"
                className="text-center p-5 text-gray-500"
              >
                No Departments Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Departments;