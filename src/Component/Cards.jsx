import React, { useState } from "react";
import { useSelector } from "react-redux";

const MenuCard = ({
  dish,
  rating,
  description,
  imageUrl,
  price,
  onAddToCart,
}) => {
  //  getting data inside cards something like that (Redux pourpouse)
  const carts = useSelector(store => store.allCart.items);
  console.log(carts);

  const [isExpanding, setIsExpanding] = useState(false);
  // using this below line as if the character is below 90 word the red more will not apprear
  const longDescription = description.length > 90;
  const shortDescription = isExpanding
    ? description
    : `${description.slice(0, 90)}...`;
  const toggleButton = () => setIsExpanding(!isExpanding);
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-slate-200 transform transition duration-300 hover:scale-105 hover:shadow-2xl border-l-black ">
      {/* Food Image */}
      <img
        className="w-full h-48 object-cover p-3 rounded-lg"
        src={imageUrl}
        alt={dish}
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          {/* Food Name */}
          <h2 className="font-bold text-xl text-gray-900">{dish}</h2>

          {/* Food Rating */}
          <div className="flex items-center bg-green-500 text-white text-sm rounded-full px-2 py-1 ml-4">
            <span>{rating}</span>
          </div>
        </div>

        {/* Food Description */}
        <p className="text-gray-700 text-base mt-2">{shortDescription}</p>
        {longDescription && (
          <button className="text-blue-500 " onClick={toggleButton}>
            {isExpanding ? "Read Less" : "Read More"}
          </button>
        )}

        {/* Food Price */}
        <div className="mt-4">
          <span className="text-lg font-semibold text-gray-900">₹ {price}</span>
        </div>

        {/* Add to Cart Button */}
        <button
          className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={onAddToCart}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
