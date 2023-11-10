import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { Severity } from "../store/type";
import AppContext from "../store/AppContext";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { state, dispatch } = React.useContext(AppContext);
  const { message, severity, isOpen } = state.snackbar;

  const handleClose = () => {
    console.log("closing snackbar");
    dispatch({
      type: "TOGGLE_SNACKBAR",
      payload: {
        isOpen: false,
        message: "Login successful",
        severity: "success",
      },
    });
  };

  return (
    <>
      {isOpen && (
        <Snackbar autoHideDuration={5000} open={isOpen} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
      {children}
    </>
  );
};
export default CustomizedSnackbar;
