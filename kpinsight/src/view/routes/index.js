import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import MainLayout from "../../components/main-layout";
function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/register"
        element={<MainLayout component={<Register />} />}
      />
    </Routes>
  );
}

export default AllRoutes;
