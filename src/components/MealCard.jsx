import React from "react";
import { NavLink } from "react-router-dom";
import plate from "../assets/restaurant.png";

export const MealCard = ({ meal }) => {
  return (
    <div className="max-w-sm w-10/12 sm:w-5/12 md:w-4/12 lg:w-5/12 overflow-hidden shadow-lg mx-auto border border-gray-300 rounded-lg">
      <NavLink to={`/meals/${meal.Guid}`}>
        <img
          className="w-full h-60 object-cover p-5"
          src={`/img/${meal.Name}.jpg`}
          alt={meal.Name}
        />
        <div className=" flex justify-between items-center px-6 pb-4">
          <p className="text-lg mb-2">{meal.Name}</p>
          <img src={plate} className="w-7 h-7" alt="" />
        </div>
      </NavLink>
    </div>
  );
};
