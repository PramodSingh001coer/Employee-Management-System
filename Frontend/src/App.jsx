import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route element={<DashboardLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/employees" element={<Employees />} />

          <Route path="/departments" element={<Departments />} />
          <Route path="/employees/add" element={<AddEmployee />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;