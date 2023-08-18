import { useState } from "react";
import menulist from "../data/MenuList"
import FoodItemCard from "./FoodItemCard";

export default function MenuBanner() {
  const [activeTab, setActiveTab] = useState("pizza");

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  
  return (
    <div className="bg-black">
      <h1 className="mx-20 mb-5 pt-5 text-2xl font-poppins text-white">
        Today&apos;s Menu
      </h1>
      <div className="flex mx-20">
        <div className="flex flex-col space-y-4 mr-8">
          <button
            className={`px-4 py-2 rounded-full font-poppins hover:bg-red-500 hover:text-white hover:duration-300 ${
              activeTab === "pizza"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleTabClick("pizza")}
          >
            Pizzas
          </button>
          <button
            className={`px-4 py-2 rounded-full font-poppins hover:bg-red-500 hover:text-white hover:duration-300 ${
              activeTab === "burger"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleTabClick("burger")}
          >
            Burgers
          </button>
          <button
            className={`px-4 py-2 rounded-full font-poppins hover:bg-red-500 hover:text-white hover:duration-300 ${
              activeTab === "pasta"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleTabClick("pasta")}
          >
            Pasta
          </button>
          <button
            className={`px-4 py-2 rounded-full font-poppins hover:bg-red-500 hover:text-white hover:duration-300 ${
              activeTab === "drinks"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => handleTabClick("drinks")}
          >
            Drinks
          </button>
        </div>
        <div className="flex gap-2 flex-wrap ml-9 mb-5">
          {menulist
            .filter((item) => item.category === activeTab)
            .map((item) => (
              <FoodItemCard key={item.id} item={item}  />
            ))}
        </div>
      </div>
    </div>
  );
}
