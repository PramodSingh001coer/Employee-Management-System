import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const { data } = await API.get("/employees");

      if (data.success) {
        setEmployees(data.employees);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Employees</h1>

        <Link
          to="/employees/add"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          + Add Employee
        </Link>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Employee..."
        className="border p-2 rounded w-80 mb-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3">Employee ID</th>
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Department</th>
            <th className="border p-3">Designation</th>
            <th className="border p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee._id}>
              <td className="border p-3">{employee.employeeId}</td>
              <td className="border p-3">{employee.name}</td>
              <td className="border p-3">{employee.email}</td>
              <td className="border p-3">
                {employee.department?.name}
              </td>
              <td className="border p-3">{employee.designation}</td>
              <td className="border p-3">{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;