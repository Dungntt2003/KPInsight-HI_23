import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import MainLayout from "../../components/main-layout";
import Login from "../pages/login";
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/register"
        element={<MainLayout component={<Register />} />}
      />
      <Route path="/login" element={<MainLayout component={<Login />} />} />
    </Routes>
  );
}

export default AllRoutes;
