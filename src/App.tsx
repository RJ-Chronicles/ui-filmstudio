import AppRout from "./components/AppRout";
import LoadingSpinner from "./components/LoadingSpinner";
import CustomizedSnackbar from "./components/Snackbar";
import AppContext, { AppProvider } from "./store/AppContext";
import { SessionProvider } from "./session";
import { useContext } from "react";

const App = () => {
  const { state } = useContext(AppContext);
  const { isLoading } = state;
  console.log("isLoading", isLoading);
  return (
    <AppProvider>
      <SessionProvider>
        <CustomizedSnackbar>
          <LoadingSpinner>
            <AppRout />
          </LoadingSpinner>
        </CustomizedSnackbar>
      </SessionProvider>
    </AppProvider>
  );
};

export default App;
