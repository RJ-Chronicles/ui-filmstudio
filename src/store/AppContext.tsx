import { createContext, useReducer } from "react";
import { State, initialUser } from "./type";
import AppReducer, { Dispatch } from "./index";
const initialState: State = {
  user: initialUser,
  isLoading: false,
  snackbar: {
    isOpen: false,
    message: "",
    severity: "success",
  },
};

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch;
}>({
  state: initialState,
  dispatch: () => null,
});

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
