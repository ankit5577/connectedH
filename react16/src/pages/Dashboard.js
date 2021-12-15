import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
    console.log(productCtx.products);
  }, [productCtx.products]);
  return (
    <div className="p-4">
      {product.length > 0 && (
        <ul className="flex flex-col md:flex-row flex-wrap gap-2">
          {product.map((data) => (
            <Link
              to={`/product/${data._id}`}
              key={data._id}
              className="flex flex-row border rounded-md p-2 m-2 md:w-[250px] hover:shadow-xl hover:border-0 hover:shadow-indigo-100"
            >
              <li className="flex flex-col">
                <div className="p-2 mx-auto">
                  <img alt="nothing" src={data.imgUrl} className="w-24" />
                </div>
                <div className="p-2">
                  <h2 className="text-xl font-light antialiased text-gray-700">
                    {data.name}
                  </h2>
                  <h4 className="text-indigo-700"> ₹{data.price}</h4>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
      {product.length === 0 && (
        <p className="text-2xl text-center">No Product Found</p>
      )}
    </div>
  );
}

export default Dashboard;
