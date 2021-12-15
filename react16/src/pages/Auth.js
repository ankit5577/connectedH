import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthCtx from "../services/Auth.state";

function AuthPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthCtx);
  const loginHandler = () => {
    authCtx.login();
    navigate('/');
  };
  console.log(authCtx);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      alert("you are already LoggedIn");
      navigate("/");
    }
  }, []);

  return (
    <div className="mx-auto">
      <div className="border p-4 max-w-lg mx-auto rounded-lg">
        <form className="flex flex-col gap-2 flex-wrap p-4">
          <h2 className="text-4xl text-indigo-800 font-light antialiased">
            Login
          </h2>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="border-b bg-gray-50 p-2 w-full rounded-md focus:border-2 focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="">
            <label
              className="block  text-gray-700 text-sm font-medium mb-2 "
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border-b bg-gray-50 p-2 w-full rounded-md focus:border-2 focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <button
            onClick={loginHandler}
            className="mt-2 bg-indigo-500 text-sm hover:bg-indigo-600 hover:shadow-md hover:shadow-indigo-200 text-white px-3 py-2 rounded-lg  mx-auto"
            type="button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
