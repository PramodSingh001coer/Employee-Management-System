import { useEffect, useState } from "react";
import API from "../services/api";

const AddEmployee = () => {
  const [departments, setDepartments] = useState([]);

  const [form, setForm] = useState({
    employeeId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: "",
  });

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/employees", form);

      alert(data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Add Employee</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        <input
          name="employeeId"
          placeholder="Employee ID"
          onChange={handleChange}
        />

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <select
          name="department"
          onChange={handleChange}
        >
          <option value="">Select Department</option>

          {departments.map((dept) => (
            <option
              key={dept._id}
              value={dept._id}
            >
              {dept.name}
            </option>
          ))}
        </select>

        <input
          name="designation"
          placeholder="Designation"
          onChange={handleChange}
        />

        <input
          name="salary"
          type="number"
          placeholder="Salary"
          onChange={handleChange}
        />

        <input
          name="joiningDate"
          type="date"
          onChange={handleChange}
        />

        <button
          className="bg-blue-600 text-white py-3 rounded col-span-2"
        >
          Add Employee
        </button>

      </form>
    </div>
  );
};

export default AddEmployee;