import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { Severity } from "../store/type";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbar: React.FC<{
  open: boolean;
  snackbarClose: (open: boolean) => void;
  message: string;
  severty?: Severity;
}> = ({ open, message, severty = "success", snackbarClose }) => {
  React.useEffect(() => {});
  const handleClose = () => {
    console.log("closing snackbar");
    snackbarClose(false);
  };

  return (
    <>
      {open && (
        <Snackbar autoHideDuration={5000} open={open} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={severty}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
export default CustomizedSnackbar;
