import { useState } from "react";
import AdminLogin from "./pages/AdminLoginPage";
import { User, OperationType } from "./store/type";
import AppRout from "./components/AppRout";
import LoadingSpinner from "./components/LoadingSpinner";
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState<User>();
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  return (
    <>
      <LoadingSpinner open={loadingSpinner}>
        <AppRout
          setLoggedInUser={setLoggedInUser}
          loggedInUser={loggedInUser}
          setLoadingSpinner={setLoadingSpinner}
        />
      </LoadingSpinner>
    </>
  );
};

export default App;
