import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cateID, filterByID, resetMeals } from "../app/features/Meal/mealSlice";

export const Category = () => {
  const dispatch = useDispatch();

  const catID = useSelector(cateID);

  const handleClickCategory = (catID) => {
    dispatch(resetMeals());
    dispatch(filterByID(catID));
  };

  return (
    <div className="flex my-7 justify-evenly w-5/12 md:w-3/12 lg:w-3/12 mx-auto border-b-2 border-b-orange-300 p-2">
      <button
        onClick={() => handleClickCategory(1)}
        className={
          catID === 1
            ? "font-semibold hover:text-orange-200 cursor-pointer text-orange-400"
            : "font-semibold hover:text-orange-200 cursor-pointer"
        }
      >
        Meal
      </button>
      <span className="border border-orange-300"></span>
      <button
        onClick={() => handleClickCategory(2)}
        className={
          catID === 2
            ? "font-semibold hover:text-orange-200 cursor-pointer text-orange-400"
            : "font-semibold hover:text-orange-200 cursor-pointer"
        }
      >
        Vegan
      </button>
    </div>
  );
};
