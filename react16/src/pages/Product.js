import React, { useEffect } from "react";
import { useParams } from "react-router";

function ProductPage() {
  const { id } = useParams();
  useEffect(() => {
      console.log(id);
  }, [id]);
  return <div></div>;
}

export default ProductPage;
