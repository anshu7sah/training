import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProductData(data);
    };
    fetchingData();
  }, []);
  console.log(productData);

  return (
    <div>
      <p className="font-bold">{productData?.title}</p>
      <p>{productData?.brand}</p>
      <p>{productData?.category}</p>
      <p>{productData?.description}</p>
      <p>{productData?.sku}</p>
      <p>{productData?.stock}</p>
      <p>{productData?.weight}</p>
      <img src={productData?.images[0]} alt="image" />
    </div>
  );
};

export default SingleProduct;
