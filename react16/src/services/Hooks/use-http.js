import { useState } from "react";

const useHttp = (url = "", options = {}, callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(null);

  const api = "api";

  const sendRequest = async (body = null) => {
    setIsLoading(true);
    seterror(null);
    try {
      const response = await fetch(api + url, {
        method: options.method ? options.method : "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: body ? JSON.stringify(body) : null,
      }).then((data) => data.json());
      if (!response.success) {
        // TODO:show notify
        seterror(response.title);
      }
      callback(response.data);
    } catch (err) {
      console.log(err);
      seterror(err.msg || "something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
