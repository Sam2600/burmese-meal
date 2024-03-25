import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          className="card rounded my-16 w-11/12 mx-auto border lg:card-side bg-base-100 shadow-xl"
          initial={{ opacity: 0, y: "50vw" }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
          exit={{ opacity: 0 }}
        >
          <figure className="w-4/12 p-5">
            <img
              src={`/img/${meal.Name}.jpg`}
              className="w-full h-auto"
              alt=""
            />
          </figure>
          <div className="card-body w-10/12">
            <h2 className="card-title">{meal?.Name}</h2>

            <p>{meal.Ingredients}</p>
            <p>{meal.CookingInstructions}</p>

            <div className="card-actions justify-end">
              <NavLink
                to={"/"}
                className="px-4 py-2 border bg-orange-300 hover:text-orange-300 hover:bg-white hover:border-orange-300 rounded-md"
              >
                Back
              </NavLink>
            </div>
          </div>
        </motion.div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};
