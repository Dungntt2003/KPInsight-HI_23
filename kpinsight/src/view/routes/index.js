import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AllRoutes;
