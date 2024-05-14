import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import MainLayout from "../../components/main-layout";
import NavbarStatus from "../../components/navbar/navbar-status";
import NavbarOption from "../../components/navbar/navbar-option";
import SpeedChart from "../../components/speed-chart";
import KpiStatus from "../../view/pages/kpi-status";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgot-password";
import ResetPassword from "../pages/reset-passsword";
import DefineGoal from "../pages/set-kpi/define-goal";
import HeaderLayout from "../../components/layout-header";
import SetKpiForm from "../pages/set-kpi/set-kpi-form";
import ChooseOption from "../pages/set-kpi/choose-option";
import ChooseMonth from "../pages/set-kpi/choose-month";
import Done from "../pages/set-kpi/done";
import Homepage from "../pages/homepage";
import Target_list from "../pages/target_list";
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
        path="/speed-chart"
        element={<MainLayout component={<SpeedChart />} />}
      />
      <Route
        path="/kpi-status"
        element={<MainLayout component={<KpiStatus />} />}
      />
      <Route path="/home" element={<MainLayout component={<Homepage />} />} />
      <Route path="/login" element={<MainLayout component={<Login />} />} />
      <Route
        path="/forgot-password"
        element={<MainLayout component={<ForgotPassword />} />}
      />
      <Route
        path="/reset-password"
        element={<MainLayout component={<ResetPassword />} />}
      />
      <Route
        path="/define-goal"
        element={
          <HeaderLayout component={<SetKpiForm component={<DefineGoal />} />} />
        }
      />
      <Route
        path="/choose-option"
        element={
          <HeaderLayout
            component={<SetKpiForm component={<ChooseOption />} />}
          />
        }
      />
      <Route
        path="/choose-month"
        element={
          <HeaderLayout
            component={<SetKpiForm component={<ChooseMonth />} />}
          />
        }
      />

      <Route
        path="/set-done"
        element={
          <HeaderLayout component={<SetKpiForm component={<Done />} />} />
        }
      />
      <Route path="/login" element={<MainLayout component={<Register />} />} />
      <Route
        path="/target_list"
        element={<MainLayout component={<Target_list />} />}
      />
    </Routes>
  );
}

export default AllRoutes;
