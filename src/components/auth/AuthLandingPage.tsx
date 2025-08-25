import { Routes, Route } from 'react-router-dom';
import Login from './Login';
const AuthLandingPage = () => {
  return (
<Routes>
          <Route path="/login" element={<Login />} />
</Routes>
  );
}
export default AuthLandingPage;