import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AuthStore from "../services/Auth.state";
import ProductStore from "../services/Product.state";

function Dashboard() {
  const authCtx = useContext(AuthStore);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const productCtx = useContext(ProductStore);
  const navigate = useNavigate();
  const [savedProducts, setSavedProducts] = useState(false);

  const saveHandler = (product) => {
    const name = JSON.parse(localStorage.getItem("connectedh_user"))["name"];
    const savedProducts = JSON.parse(localStorage.getItem(`${name}_user_item`));
    if (!savedProducts) {
      localStorage.setItem(`${name}_user_item`, JSON.stringify([product]));
    } else {
      const localProducts = [...savedProducts, product];
      localStorage.setItem(`${name}_user_item`, JSON.stringify(localProducts));
    }
  };

  useEffect(() => {
    switch (id) {
      case undefined:
        setProduct(() => productCtx.products);
        break;
      case "all":
        setProduct(() => productCtx.products);
        break;
      case "saved":
        setSavedProducts(() => true);
        const name = JSON.parse(localStorage.getItem("connectedh_user"))[
          "name"
        ];
        const savedProducts = JSON.parse(
          localStorage.getItem(`${name}_user_item`)
        );
        if (savedProducts?.length > 0) {
          setProduct(() => savedProducts);
        } else {
          setProduct(() => []);
        }
        break;
      default:
        break;
    }
  }, [id, productCtx.products]);

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      alert("you are not logged in");
      navigate("/auth");
    }
  }, [authCtx.isLoggedIn, navigate]);

  useEffect(() => {
    console.log(productCtx.products);
  }, [productCtx.products]);

  return (
    <div className="p-4 ">
      {product.length > 0 && (
        <ul className="flex flex-col justify-around md:flex-row flex-wrap gap-2">
          {product.map((data) => (
            <div
              key={data._id}
              className="flex flex-row border rounded-md p-2 m-2 md:w-[250px]"
            >
              <li className="flex flex-col">
                <div className="p-2 mx-auto">
                  <img alt="nothing" src={data.imgUrl} className="w-24" />
                </div>
                <div className="p-2">
                  <h2 className="text-xl font-light antialiased text-gray-700">
                    {data.name}
                  </h2>
                  <div className="flex flex-row gap-2 justify-evenly">
                    <h4 className="text-indigo-700"> ₹{data.price}</h4>
                    {!savedProducts && (
                      <button
                        onClick={() => saveHandler(data)}
                        className="px-3 py-2 border rounded-lg hover:bg-indigo-600 hover:text-white"
                      >
                        save
                      </button>
                    )}
                  </div>
                </div>
              </li>
            </div>
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
