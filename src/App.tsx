import { useState } from "react";
import AdminLogin from "./pages/AdminLoginPage";
import { User, OperationType } from "./store/type";
import AppRout from "./components/AppRout";
import LoadingSpinner from "./components/LoadingSpinner";
import CustomizedSnackbar from "./components/Snackbar";
import { AppProvider } from "./store/AppContext";
import { SessionProvider } from "./session";
const App = () => {
  return (
    <SessionProvider>
      <AppProvider>
        <CustomizedSnackbar>
          <LoadingSpinner open={false}>
            <AppRout />
          </LoadingSpinner>
        </CustomizedSnackbar>
      </AppProvider>
    </SessionProvider>
  );
};

export default App;
