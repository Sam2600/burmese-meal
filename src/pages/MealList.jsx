import React, { useEffect, useState } from "react";
import { MealCard } from "../components/MealCard";
import { useSelector } from "react-redux";
import { cateID, meals } from "../app/features/Meal/mealSlice";
import { Paginate } from "../components/Paginate";

const MealList = () => {
  //

  const catID = useSelector(cateID);

  const allmeal = useSelector(meals);
  //
  const [startOffset, setStartOffset] = useState(0);

  const totalMeals = allmeal.length;

  const mealsPerPage = 6;

  const totalPages = Math.ceil(totalMeals / mealsPerPage);

  const endOffset = startOffset + mealsPerPage;

  const paginatedMeals = allmeal.slice(startOffset, endOffset);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * mealsPerPage) % totalMeals;
    setStartOffset(newOffset);
  };

  useEffect(() => {
    setStartOffset(0);
  }, [catID]);

  const mealList = paginatedMeals.map((meal) => (
    <MealCard key={meal.Guid} meal={meal} />
  ));

  return (
    <div className="flex flex-col">
      <div id="meals-container" className="flex flex-wrap flex-row gap-5 py-5">
        {mealList}
      </div>
      {/* Pagination */}
      <Paginate
        handlePageClick={handlePageClick}
        mealsPerPage={mealsPerPage}
        totalPages={totalPages}
      />
      {/* Pagination */}
    </div>
  );
};

export default MealList;

{
  /* <motion.div
        id="meals-container"
        className="flex flex-wrap flex-row gap-5 py-5"
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
        viewport={{ once: true }}
      >
        <AnimatePresence>
          {mealList}
        </AnimatePresence>
      </motion.div> */
}
