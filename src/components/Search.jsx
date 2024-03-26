import React, { useState } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { filterBySearchKey, resetMeals } from "../app/features/Meal/mealSlice";

export const Search = () => {
  //
  const dispatch = useDispatch();

  const [searchKey, setSearchKey] = useState("");

  const [key, setKey] = useState(0);

  const handleOnClick = () => {
    dispatch(resetMeals());
    dispatch(filterBySearchKey(searchKey));
  };

  const handleResetTypes = () => {
    setSearchKey("");
    setKey((key) => key + 1);
    dispatch(resetMeals());
  };

  return (
    <div className="join px-12 mb-10 mt-5 flex flex-wrap items-center justify-start gap-4">
      <div className=" flex items-center">
        <input
          key={key}
          onChange={(e) => setSearchKey(e.target.value)}
          className="input input-bordered join-item"
          placeholder="Search your appetit . . ."
        />
        <button
          type="button"
          onClick={handleOnClick}
          className="btn transition-all text-white duration-300 join-item bg-orange-300 hover:text-orange-300 hover:bg-white hover:border hover:border-orange-300"
        >
          <CiForkAndKnife className="text-xl" />
          Search
        </button>
      </div>
      <button
        onClick={handleResetTypes}
        className="btn transition-all text-white duration-300  bg-orange-300 hover:text-orange-300 hover:bg-white hover:border hover:border-orange-300"
      >
        All
      </button>
    </div>
  );
};
