import MenuCard from "../Component/Cards";
import React from "react";
import Cardsdata from "../Data/CardData";
import { addToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  // add to cart
  // just passing the data throught dispatch rest workin will in slice
  const handelClick = (itemsPassedToCart) => {
    dispatch(addToCart(itemsPassedToCart));
    console.log("button clicked");
    console.log(itemsPassedToCart);
  };

  return (
    <div className="p-6 bg-slate-600">
      <h1>Home here</h1>
      <div className="grid grid-cols-4 gap-4 bg-yellow-400">
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
