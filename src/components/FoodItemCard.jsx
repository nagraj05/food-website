import { useState } from "react";
import PropTypes from "prop-types";

const FoodItemCard = ({ item }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const totalPrice = item.price * count;

  return (
    <div
      key={item.id}
      className=" border p-2 rounded-md w-72 h-auto flex flex-col "
    >
      <img
        src={item.image}
        width={200}
        height="0"
        sizes="100vw"
        style={{ height: "200px" }}
        className="w-4/5 mx-auto"
      />
      <div className="flex flex-col items-start">
        <h2 className="text-md font-light text-white">{item.name}</h2>
        <p className="font-semibold text-white">&#8377;{totalPrice}</p>
        <div className="flex gap-3 items-center mt-3">
          <div className="flex  text-white">
            <button
              className="px-2 bg-white hover:bg-gray-400 text-black text-md"
              onClick={handleDecrement}
            >
              -
            </button>
            <div className="px-2 text-white">{count}</div>
            <button
              className="px-2 bg-white hover:bg-gray-400 text-black text-md"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button
            className=" px-3 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs"
            >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodItemCard.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      // Add any other expected properties of the item object here
    }).isRequired,
  };

export default FoodItemCard;
