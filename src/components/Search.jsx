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
    <div className="join px-12 my-5">
      <div>
        <div>
          <input
            key={key}
            onChange={(e) => setSearchKey(e.target.value)}
            className="input input-bordered join-item"
            placeholder="Search your appetit . . ."
          />
        </div>
      </div>
      <div className="indicator gap-2">
        <button
          type="button"
          onClick={handleOnClick}
          className="btn transition-all text-white duration-300 join-item bg-orange-300 hover:text-orange-300 hover:bg-white hover:border hover:border-orange-300"
        >
          <CiForkAndKnife className="text-xl" />
          Search
        </button>
        <button
          onClick={handleResetTypes}
          className="btn transition-all text-white duration-300 join-item bg-orange-300 hover:text-orange-300 hover:bg-white hover:border hover:border-orange-300"
        >
          All Type
        </button>
      </div>
    </div>
  );
};
