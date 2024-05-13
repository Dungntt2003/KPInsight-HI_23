import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import MainLayout from "../../components/main-layout";
import NavbarStatus from "../../components/navbar/navbar-status";
import NavbarOption from "../../components/navbar/navbar-option";
import SpeedChart from "../../components/donut-chart";
import KpiStatus from "../../view/pages/kpi-status";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgot-password";
import ResetPassword from "../pages/reset-passsword";
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/register"
        element={<MainLayout component={<Register />} />}
      />
      <Route
        path="/navbar-status"
        element={<MainLayout component={<NavbarStatus />} />}
      />
      <Route
        path="/navbar-option"
        element={<MainLayout component={<NavbarOption />} />}
      />
      <Route
        path="/donut-chart"
        element={<MainLayout component={<SpeedChart />} />}
      />
      <Route
        path="/kpi-status"
        element={<MainLayout component={<KpiStatus />} />}
      />
      <Route path="/login" element={<MainLayout component={<Login />} />} />
      <Route
        path="/forgot-password"
        element={<MainLayout component={<ForgotPassword />} />}
      />
      <Route
        path="/reset-password"
        element={<MainLayout component={<ResetPassword />} />}
      />
    </Routes>
  );
}

export default AllRoutes;
