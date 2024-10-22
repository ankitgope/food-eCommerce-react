import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useSelector } from "react-redux";
const NavBar = () => {
  //  getting data inside cards something like that 
  // const {cart} = useSelector((state) => state.allCart);
  console.log("header useSelector", cart);
  return (
    <div className="bg-black text-white flex justify-between items-center p-3">
      <div className="ml-4">
        <h1 className="text-2xl">Store-sellers.com</h1>
      </div>

      <div className="flex items-center mr-4 gap-4">
        <NavLink to={"/"}>Home</NavLink>
        {/* Cart Icon with Badge */}
        <NavLink to={"/bag"} className="relative flex items-center">
          <ShoppingCartRoundedIcon />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            0 {/* Replace with dynamic cart item count */}
          </span>
          {/* <span className="ml-2">Bag</span> */}
        </NavLink>

        {/* Wishlist Icon */}
        <NavLink to={"/wishlist"} className="flex items-center">
          <FavoriteOutlinedIcon className="mr-1" />
          wishlist
        </NavLink>

        {/* Logout Button */}
        <button className="bg-white rounded-lg text-black p-2">Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
