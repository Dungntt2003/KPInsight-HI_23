import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import MainLayout from "../../components/main-layout";
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
