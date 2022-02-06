import { createContext, useContext, useEffect, useState } from "react";

export const AuthPeoviderContext = createContext();
export const AuthPeoviderContextDispatcher = createContext();

const AuthPeovider = ({ children }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authState")) || false;
    setState(userData);
  }, []);
  useEffect(() => {
    const data = JSON.stringify(state);
    localStorage.setItem("authState", data);
  }, [state]);
  return (
    <AuthPeoviderContext.Provider value={state}>
      <AuthPeoviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthPeoviderContextDispatcher.Provider>
    </AuthPeoviderContext.Provider>
  );
};

export default AuthPeovider;

export const useAuth = () => useContext(AuthPeoviderContext);
export const useAuthAction = () => useContext(AuthPeoviderContextDispatcher);
