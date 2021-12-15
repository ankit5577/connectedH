import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthStore from "../services/Auth.state";
import ProductStore from "../services/Product.state";

function Dashboard() {
  const authCtx = useContext(AuthStore);
  const [product, setProduct] = useState([]);
  const productCtx = useContext(ProductStore);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      alert("you are not logged in");
      navigate("/auth");
    }
  }, [authCtx.isLoggedIn, navigate]);
  useEffect(() => {
    setProduct(() => productCtx.products);
  }, [productCtx.products]);
  return (<div>
      
  </div>);
}

export default Dashboard;
