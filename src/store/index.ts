import { OperationType, User, State, Severity } from "./type";

export type Action =
  // | { type: "OWNER_LOGIN"; payload: User }
  | { type: "SET_LOADING"; payload: boolean }
  | {
      type: "TOGGLE_SNACKBAR";
      payload: { isOpen: boolean; message: string; severity: Severity };
    };
export type Dispatch = (action: Action) => void;

const AppReducer = (state: State, action: Action) => {
  switch (action.type) {
    // case "OWNER_LOGIN":
    //   return {
    //     ...state,
    //     user: action.payload,
    //   };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "TOGGLE_SNACKBAR":
      return {
        ...state,
        snackbar: {
          isOpen: action.payload.isOpen,
          message: action.payload.message,
          severity: action.payload.severity,
        },
      };

    default:
      return state;
  }
};

export default AppReducer;
