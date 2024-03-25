import React from "react";
import { NavLink } from "react-router-dom";

export const MealCard = ({ meal }) => {
  return (
    <div className="max-w-sm w-3/12 overflow-hidden shadow-lg mx-auto border border-gray-300 rounded-lg">
      <NavLink to={`/meals/${meal.Guid}`}>
        <img
          className="w-full h-60 object-cover p-5"
          src={`src/img/${meal.Name}.jpg`}
          alt={meal.Name}
        />
        <div className="px-6 pb-4">
          <p className="text-lg mb-2">{meal.Name}</p>
        </div>
      </NavLink>
    </div>
  );
};
