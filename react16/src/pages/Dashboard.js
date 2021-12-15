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
      const index = savedProducts.findIndex(
        (response) => response._id === product._id
      );
      if (index < 0) {
        const localProducts = [...savedProducts, product];
        localStorage.setItem(
          `${name}_user_item`,
          JSON.stringify(localProducts)
        );
      }
    }
  };

  const deleteSave = (product) => {
    const name = JSON.parse(localStorage.getItem("connectedh_user"))["name"];
    const savedProducts = JSON.parse(localStorage.getItem(`${name}_user_item`));
    if (!savedProducts) {
      alert("product is already deleted or is unavailable!");
    } else {
      const updatedSavedProducts = savedProducts.filter(
        (response) => response._id !== product._id
      );
      localStorage.setItem(
        `${name}_user_item`,
        JSON.stringify(updatedSavedProducts)
      );
      setProduct(() => updatedSavedProducts);
    }
  };

  useEffect(() => {
    switch (id) {
      case undefined:
        setSavedProducts(() => false);
        setProduct(() => productCtx.products);
        break;
      case "all":
        setSavedProducts(() => false);
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
  }, [productCtx.products]);

  return (
    <div className="p-4">
      <h2 className="text-xl md:text-3xl my-3 text-indigo-800 antialiased font-normal md:font-medium">
        {savedProducts ? "Saved Products" : "All Products"}
      </h2>
      {product.length > 0 && (
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {product.map((data) => (
                      <tr key={data._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-20 w-10 md:w-16">
                              <img
                                className="w-10 md:w-16 rounded-xl"
                                src={data.imgUrl}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm md:text-xl font-semibold text-gray-600">
                                {data.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            ₹{data.price}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {!savedProducts && (
                            <button
                              onClick={() => saveHandler(data)}
                              className="px-3 py-2 border rounded-lg hover:bg-indigo-600 hover:text-white text-indigo-800"
                            >
                              save
                            </button>
                          )}
                          {savedProducts && (
                            <button
                              onClick={() => deleteSave(data)}
                              className="px-3 py-2 border rounded-lg hover:bg-red-600 hover:text-white text-red-600"
                            >
                              delete
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
      {product.length === 0 && (
        <p className="text-lg text-gray-500 md:text-2xl text-center">
          No{savedProducts && " Saved"} Products Found
        </p>
      )}
    </div>
  );
}

export default Dashboard;
