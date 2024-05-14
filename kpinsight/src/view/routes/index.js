import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import MainLayout from "../../components/main-layout";
import Target_list from "../pages/target_list";
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/register"
        element={<MainLayout component={<Register />} />}
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
