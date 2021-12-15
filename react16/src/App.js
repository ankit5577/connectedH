import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Loading from "./components/Loading/Loading";
import { Navbar } from "./components/Navbar";

const AuthPage = React.lazy(() => import("./pages/Auth"));
const DashboardPage = React.lazy(() => import("./pages/Dashboard"));
const ProductPage = React.lazy(() => import("./pages/Product"));

function App() {
  return (
    <div>
      <Navbar />
      <div className="App container h-screen mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                <DashboardPage />
              </Suspense>
            }
          />
          <Route
            index
            element={
              <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                <DashboardPage />
              </Suspense>
            }
          />
          <Route
            path="product/:id"
            element={
              <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                <ProductPage />
              </Suspense>
            }
          />
          <Route
            path="auth"
            element={
              <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                <AuthPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <div
                className="p-2 mx-auto antialiased font-bold 
                text-gray-700 h-screen text-4xl"
              >
                Page not found
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
