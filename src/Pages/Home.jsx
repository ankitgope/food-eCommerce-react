import MenuCard from "../Component/Cards";
import React from "react";
import Cardsdata from "../Data/CardData";
import { addToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  // add to cart
  // just passing the data which card sill be clicked  throught dispatch rest workin will in slice
  // below function is used in onclick 
  const handelClick = (itemsPassedToCart) => {
    dispatch(addToCart(itemsPassedToCart));
    console.log("button clicked");
    console.log(itemsPassedToCart);
  };

  return (
    <div className="p-6 ">
      <h1 className="text-6xl p-1 mb-2">Find  your favourite food </h1>
      <div className="grid grid-cols-4 gap-4 ">
        {Cardsdata.map((data, id) => (
          <MenuCard
            key={id}
            description={data.description}
            rating={data.rating}
            dish={data.dish}
            imageUrl={data.imgdata}
            price={data.price}
            onAddToCart={() => handelClick(data)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
