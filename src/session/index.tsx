import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  username: string;
  token: string;
  tokenExpiry: number;
  isLoggedIn: boolean;
}

interface SessionContextValue {
  user: User | null;
  login: (
    username: string,
    token: string,
    tokenExpiry: number,
    isLoggedIn: boolean
  ) => void;
  logout: () => void;
}

const SessionContext = createContext<SessionContextValue | undefined>(
  undefined
);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if the user is already logged in from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      if (parsedUser.tokenExpiry > Date.now()) {
        setUser(parsedUser);
      } else {
        // Token has expired, clear local storage
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = (
    username: string,
    token: string,
    tokenExpiry: number,
    isLoggedIn: boolean
  ) => {
    // Save user details to local storage
    const newUser: User = { username, token, tokenExpiry, isLoggedIn };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    // Remove user details from local storage
    localStorage.removeItem("user");
    setUser(null);
  };

  const contextValue: SessionContextValue = {
    user,
    login,
    logout,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};
