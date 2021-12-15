import { createContext, useEffect, useState } from "react";

const AuthCtx = createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogIn: (email, password) => {
    console.log(email, password);
  },
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  // auto login
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setIsLoggedin(true);
    }
  }, [isLoggedIn]);

  const loginHandler = () => {
    setIsLoggedin(() => true);
  };

  const logoutHandler = () => {
    setIsLoggedin(() => false);
  };

  const init_value = {
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthCtx.Provider value={init_value}>{props.children}</AuthCtx.Provider>
  );
};

export default AuthCtx;
