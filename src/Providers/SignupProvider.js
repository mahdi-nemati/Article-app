import { createContext, useContext, useEffect, useState } from "react";

export const SignupProviderContext = createContext();
export const SignupProviderContextDispatcher = createContext();

const SignupProvider = ({ children }) => {
  const [state, setState] = useState(false);
//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("authState")) || false;
//     setState(userData);
//   }, []);
//   useEffect(() => {
//     const data = JSON.stringify(state);
//     localStorage.setItem("authState", data);
//   }, [state]);
  return (
    <SignupProviderContext.Provider value={state}>
      <SignupProviderContextDispatcher.Provider value={setState}>
        {children}
      </SignupProviderContextDispatcher.Provider>
    </SignupProviderContext.Provider>
  );
};

export default SignupProvider;

export const useSignup = () => useContext(SignupProviderContext);
export const useSignupAction = () => useContext(SignupProviderContextDispatcher);
