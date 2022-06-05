import React, { createContext } from "react";
import { useAuth } from "./auth-hook";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const { token, login, logout, userId } = useAuth();
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isLoggedIn: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
