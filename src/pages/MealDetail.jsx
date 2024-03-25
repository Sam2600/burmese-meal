import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mealByID, searchByID } from "../app/features/Meal/mealSlice";

export const MealDetail = () => {
  //
  const { id } = useParams();

  const dispatch = useDispatch();

  const meal = useSelector(mealByID);

  useEffect(() => {
    if (id) {
      dispatch(searchByID(id));
    }
  }, [id]);

  return (
    <>
      {meal ? (
        <div className="card rounded my-10 w-11/12 mx-auto border lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={`/src/img/${meal?.Name}.jpg`}
              className="w-80 h-80"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{meal?.Name}</h2>
            <p>{meal.Ingredients}</p>
            <p>{meal.CookingInstructions}</p>
            <div className="card-actions justify-end">
              <NavLink to={"/"} className="px-4 py-2 bg-orange-300 rounded-md">
                Ok Par
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};
