export interface User {
  username: string;
  password: string;
  token: string;
  isLoggedIn: boolean;
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
