import React from "react";
import Breakfast from "./images/breakfast.png";
import Veg from "./images/grain.png";
import NonVeg from "./images/butchering.png";
import Lunch from "./images/bento.png";
import Dinner from "./images/dinner.png";
import Sweets from "./images/donut.png";

const List = () => {
  return (
    <div className="h-auto flex justify-center bg-[linear-gradient(135deg,_rgb(14,_14,_33),_rgb(28,_6,_6),_black)] items-center w-full py-8 px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
        <div className="flex flex-col items-center bg-[linear-gradient(white,_rgb(225,_177,_131))] p-4 rounded-lg shadow-md">
          <img src={Breakfast} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" alt="Breakfast" />
          <h1 className="text-lg font-semibold mt-4">Breakfast</h1>
        </div>
        <div className="flex flex-col items-center bg-[linear-gradient(white,_rgb(137,_237,_132))] p-4 rounded-lg shadow-md">
          <img src={Veg} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" alt="Vegetarian" />
          <h1 className="text-lg font-semibold mt-4">Vegetarian</h1>
        </div>
        <div className="flex flex-col items-center bg-[linear-gradient(white,_rgb(251,_88,_88))] p-4 rounded-lg shadow-md">
          <img src={NonVeg} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" alt="Non-Vegetarian" />
          <h1 className="text-lg font-semibold mt-4">Non-Vegetarian</h1>
        </div>
        <div className="flex flex-col items-center bg-[linear-gradient(white,_rgb(162,_193,_243))] p-4 rounded-lg shadow-md">
          <img src={Sweets} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" alt="Sweets" />
          <h1 className="text-lg font-semibold mt-4">Sweets</h1>
        </div>
        <div className="flex flex-col items-center bg-[linear-gradient(white,_rgb(234,_154,_231))] p-4 rounded-lg shadow-md">
          <img src={Lunch} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" alt="Lunch" />
          <h1 className="text-lg font-semibold mt-4">Lunch</h1>
        </div>
        <div className="flex flex-col items-center bg-[linear-gradient(white,_rgb(123,_190,_184))] p-4 rounded-lg shadow-md">
          <img src={Dinner} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" alt="Dinner" />
          <h1 className="text-lg font-semibold mt-4">Dinner</h1>
        </div>
      </div>
    </div>
  );
};

export default List;
