import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
const AuthLandingPage = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registartion" element={<Registration />} />
    </Routes>
  );
};
export default AuthLandingPage;
