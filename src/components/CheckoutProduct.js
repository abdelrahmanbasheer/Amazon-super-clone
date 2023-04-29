import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket,removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({ item }) => {
  const { id, title, price, description, category, image } = item;
  const dispatch=useDispatch()
  const addItemToBasket=()=>{
dispatch(addToBasket(item))
  }
  const removeItemFromBasket=()=>{
    dispatch(removeFromBasket({id}))
  }
  return (
    <div className="grid grid-cols-5">
      <img src={image} width={200} height={200} alt="" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          <StarIcon className="h-5 text-yellow-400"></StarIcon>
          <StarIcon className="h-5 text-yellow-400"></StarIcon>
          <StarIcon className="h-5 text-yellow-400"></StarIcon>
          <StarIcon className="h-5 text-yellow-400"></StarIcon>
          <StarIcon className="h-5 text-gray-400"></StarIcon>
        </div>
        <p className="text-xs my-2 line-clamp-2 md:text-sm">{description}</p>
        <h4 className="mb-5 ">{price}$</h4>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button font-semibold" onClick={()=>addItemToBasket()}>Add to basket</button>
        <button className="button font-semibold" onClick={()=>removeItemFromBasket()}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
