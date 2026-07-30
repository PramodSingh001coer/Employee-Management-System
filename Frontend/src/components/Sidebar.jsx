import { Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed">

      <h1 className="text-2xl font-bold text-center py-6">
        EMS
      </h1>

      <ul className="space-y-3 p-5">

        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaHome />
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/employees"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaUsers />
            Employees
          </Link>
          <li>
  <Link
    to="/employees/add"
    className="flex items-center gap-3 hover:text-blue-400"
  >
    Add Employee
  </Link>
</li>
        </li>

        <li>
          <Link
            to="/departments"
            className="flex items-center gap-3 hover:text-blue-400"
          >
            <FaBuilding />
            Departments
          </Link>
        </li>

        <li>
          <button className="flex items-center gap-3 hover:text-red-400">
            <FaSignOutAlt />
            Logout
          </button>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;