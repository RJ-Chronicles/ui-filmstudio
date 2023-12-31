import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/AdminLoginPage";
import Dashboard from "../pages/Dashboard";
import Landingpage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import { useSession } from "../session";

const AppRout = () => {
  const { user } = useSession();
  return (
    <Routes>
      <Route path="/" element={<Landingpage />}></Route>
      <Route path="/login" element={<AdminLogin />} />
      <Route
        path="/admin-dashboard"
        element={user?.isLoggedIn ? <Dashboard /> : <Landingpage />}
      ></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRout;
