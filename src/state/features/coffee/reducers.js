import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    getCoffees: {
        coffees: [],
        hasError: false,
        isLoading: false
    }
}
export const coffeeSlice = createSlice({
    name: 'coffe',
    initialState,
    reducers: {
        getCoffeesLoading: (state) => {
            state.getCoffees.isLoading = true;
        },
        getCoffeesSuccess: (state,action) => {
            state.getCoffees.isLoading = false;
            state.getCoffees.coffees = action.payload;
        },
        getCoffeesErrors: (state) => {
            state.getCoffees.isLoading = false;
            state.getCoffees.hasError = true;
        } 
    }
})

export const {
    getCoffeesLoading,
    getCoffeesErrors,
    getCoffeesSuccess
} = coffeeSlice.actions;

export default coffeeSlice.reducer;