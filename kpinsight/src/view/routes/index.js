import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import MainLayout from "../../components/main-layout";
import NavbarStatus from "../../components/navbar/navbar-status";
import NavbarOption from "../../components/navbar/navbar-option";
import KpiStatus from "../../view/pages/kpi-status";
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
        path="/kpi-status"
        element={<MainLayout component={<KpiStatus />} />}
      />
      <Route path="/login" element={<MainLayout component={<Register />} />} />
    </Routes>
  );
}

export default AllRoutes;
