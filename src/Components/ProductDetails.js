import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../Redux/Actions/Actions";
const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { id, title, price, description, image } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);
  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("error is", err));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetails();
      return () => {
        dispatch(removeSelectedProduct());
      };
    }
  }, [productId]);
  console.log("this is detailed page");
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div className="px-16 md:py-6 md:px-40  ">...Loading</div>
      ) : (
        <div className="px-16 md:py-6 md:px-40  flex gap-8 flex-col md:flex-row ">
          <div key={id} className="LEFT flex-1  w-[120px] ">
            <img
              src={image}
              alt="DetailedImage"
              className="h-[200px] md:h-[400px] w-[300px]"
            />
          </div>
          <div className="RIGHT flex-1">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="my-4 text-gray-600">{description}</p>
            <h3 className=" my-4 text-2xl ">$ {price}</h3>
            <button className="px-6 py-4 bg-green-300 font-semibold hover:bg-green-400 transition-all">
              Order Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
