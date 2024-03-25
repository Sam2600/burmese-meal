import { configureStore } from '@reduxjs/toolkit'
import mealReducer from '../app/features/Meal/mealSlice'

export const store = configureStore({
    reducer: {
        meal: mealReducer
    },
})