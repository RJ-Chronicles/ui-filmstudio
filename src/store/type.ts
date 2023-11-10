export interface User {
  username: string | null;
  password: string | null;
  isLoggedIn: boolean;
  token: string | null;
}

export interface AdminLoginProps {
  setLoggedInUser: (user: User) => void;
  loggedInUser: User | undefined;
}

export interface ApplicationProps extends AdminLoginProps {
  setLoadingSpinner: (open: boolean) => void;
}
export type OperationType = "NEW_INSTA_POST" | "NEW_IMAGE_POST";

export type Severity = "success" | "error" | "warning" | "info";

export interface State {
  user: User;
  isLoading: boolean;
  snackbar: { isOpen: boolean; message: string; severity: Severity };
}

export const initialUser: User = {
  username: null,
  password: null,
  isLoggedIn: false,
  token: null,
};
