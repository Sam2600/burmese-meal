import { createSlice } from '@reduxjs/toolkit'
import allMeals from "../../../data/BurmeseRecipes.json";
import users from "../../../data/UserTypes.json"

const initialState = {
    cateID: 0,
    meals: allMeals,
    mealByID: null
}

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {

        resetMeals: (state, action) => {
            state.meals = allMeals;
        },

        searchByID: (state, action) => {

            const id = action.payload

            const ALL_MEAL = allMeals

            state.mealByID = ALL_MEAL.find((meal) => meal.Guid === id);
        },

        filterByID: (state, action) => {

            const cateID = action.payload

            state.cateID = cateID

            const ALL_MEAL = allMeals

            const userType = users.find((user) => user.UserId === cateID);

            const userCode = userType.UserCode

            state.meals = ALL_MEAL.filter((meal) => meal.UserType === userCode);

        },

        filterBySearchKey: (state, action) => {

            const searchKey = action.payload;

            const ALL_MEAL = allMeals;

            state.meals = ALL_MEAL.filter((meal) => {
                return meal.Name.toLowerCase().includes(searchKey.toLowerCase())
            })
        },
    }
})

// Action creators are generated for each case reducer function

export const { searchByID, filterByID, resetMeals, filterBySearchKey } = mealSlice.actions

export const mealByID = (state) => state.meal.mealByID

export const meals = (state) => state.meal.meals

export const cateID = (state) => state.meal.cateID

export default mealSlice.reducer