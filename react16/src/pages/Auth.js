import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import AuthCtx from "../services/Auth.state";
import Loading from "../components/Loading/Loading";

function AuthPage() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const authCtx = useContext(AuthCtx);
  const [loading, setLoading] = useState(authCtx.isLoading);
  const passwordRef = useRef();

  const loginHandler = () => {
    authCtx.login(usernameRef.current.value, passwordRef.current.value);
  };

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setLoading(() => authCtx.isLoading);
  }, [authCtx.isLoading]);

  return (
    <div className="mx-auto">
      {!loading && (
        <div className="flex flex-col md:flex-row flex-wrap gap-2">
          <div className="flex-1">
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
                    ref={usernameRef}
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
                    ref={passwordRef}
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
          <div className="flex-1">
            <div className="border p-6 max-w-lg rounded-lg ">
              <h4 className="text-4xl text-indigo-800 font-light antialiased">
                Credentials
              </h4>
              <div className="flex flex-row justify-between">
                <p>richard@connectedh.com </p>
                <p className="text-indigo-600">richard@123</p>
              </div>
              <div className="flex flex-row justify-between">
                <p>joe@connectedh.com </p>
                <p className="text-indigo-600">joe@123</p>
              </div>
              <div className="flex flex-row justify-between">
                <p>sean@connectedh.com</p>
                <p className="text-indigo-600">sean@123</p>
              </div>
              <div className="flex flex-row justify-between">
                <p>mathew@connectedh.com</p>
                <p className="text-indigo-600">mathew@123</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <Loading></Loading>}
    </div>
  );
}

export default AuthPage;
