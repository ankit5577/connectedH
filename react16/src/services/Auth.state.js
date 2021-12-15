import { createContext, useEffect, useState } from "react";
import useHttp from "./Hooks/use-http";

const AuthCtx = createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogIn: (email, password) => {
    console.log(email, password);
  },
  loginError: null,
  isLoading: false,
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const {
    error: loginError,
    isLoading,
    sendRequest: loginFetch,
  } = useHttp("/user/login", { method: "POST" }, (response) => {
    if (response) {
      setIsLoggedin(() => true);
      localStorage.setItem("connectedh_user", JSON.stringify(response));
    }
  });
  useEffect(() => {
    switch (loginError) {
      case "no_user":
        alert("no user found");
        break;
      case "server_error":
        alert("server error");
        break;
      case "invalid_cred":
        alert("invalid credentials");
        break;
      case "invalid_input":
        alert("invalid input");
        break;
      default:
        break;
    }
  }, [loginError]);

  // auto login
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("connectedh_user"));
    if (loggedInUser?.username) {
      alert(`welcome back, ${loggedInUser.name}`)
      console.log(loggedInUser, 'auto login');
      setIsLoggedin(true);
    }
  }, []);

  const loginHandler = (username, password) => {
    loginFetch({ username, password });
  };

  const logoutHandler = () => {
    setIsLoggedin(() => false);
    localStorage.setItem('connectedh_user', '{}')
  };

  const init_value = {
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    loginError,
    isLoading,
  };

  return (
    <AuthCtx.Provider value={init_value}>{props.children}</AuthCtx.Provider>
  );
};

export default AuthCtx;
