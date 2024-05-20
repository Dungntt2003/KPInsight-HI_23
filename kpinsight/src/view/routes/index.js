import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
// import HeaderLayout from "../../components/main-layout";
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
import Target_list from "../pages/target/target_list";
import Target_detail from "../pages/target/target_detail";
import DefineTarget from "../pages/set-kpi/define-target";
import TurnStandard from "../pages/set-kpi/turn-standard";
import ActivityList from "../pages/activity-list";
import ActivityDetail from "../pages/activity-detail";
import GeneralSetting from "../pages/setting/general-setting";
import SettingAccount from "../pages/setting/account";
import Help from "../pages/setting/help";
import ChangePassword from "../pages/setting/change-password";
import Home from "../pages/home v2";
import Welcome from "../pages/welcome";
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/register"
        element={<HeaderLayout component={<Register />} />}
      />
      <Route
        path="/navbar-status"
        element={<HeaderLayout component={<NavbarStatus />} />}
      />
      <Route
        path="/navbar-option"
        element={<HeaderLayout component={<NavbarOption />} />}
      />
      <Route
        path="/speed-chart"
        element={<HeaderLayout component={<SpeedChart />} />}
      />
      <Route
        path="/kpi-status"
        element={<HeaderLayout component={<KpiStatus />} />}
      />
      <Route
        path="/setting/account"
        element={<HeaderLayout component={<SettingAccount />} />}
      />
      <Route
        path="/setting/change-password"
        element={<HeaderLayout component={<ChangePassword />} />}
      />
      <Route
        path="/setting/general-setting"
        element={<HeaderLayout component={<GeneralSetting />} />}
      />
      {/* <Route path="/" element={<HeaderLayout component={<Homepage />} />} />
       */}
      <Route path="/" element={<HeaderLayout component={<Welcome />} />} />
      <Route path="/login" element={<HeaderLayout component={<Login />} />} />
      <Route
        path="/forgot-password"
        element={<HeaderLayout component={<ForgotPassword />} />}
      />
      <Route
        path="/reset-password"
        element={<HeaderLayout component={<ResetPassword />} />}
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
      <Route
        path="/define-target"
        element={
          <HeaderLayout
            component={<SetKpiForm component={<DefineTarget />} />}
          />
        }
      />
      <Route
        path="/turn-standard"
        element={
          <HeaderLayout
            component={<SetKpiForm component={<TurnStandard />} />}
          />
        }
      />
      <Route
        path="/target_list"
        element={<HeaderLayout component={<Target_list />} />}
      />
      <Route
        path="/target_detail"
        element={<HeaderLayout component={<Target_detail />} />}
      />
      <Route
        path="/activity-list"
        element={<HeaderLayout component={<ActivityList />} />}
      />
      <Route
        path="/activity-detail"
        element={<HeaderLayout component={<ActivityDetail />} />}
      />
      <Route
        path="/setting/help"
        element={<HeaderLayout component={<Help />} />}
      />
      <Route path="/home" element={<HeaderLayout component={<Home />} />} />
    </Routes>
  );
}

export default AllRoutes;
