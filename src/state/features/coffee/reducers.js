import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    getCoffees: {
        coffees: [],
        hasError: false,
        isLoading: false
    },
    focusCoffee:{}
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
        },
        focusCoffee : (state,action)=>{
            state.focusCoffee = action.payload;
        } 
    }
})

export const {
    getCoffeesLoading,
    getCoffeesErrors,
    getCoffeesSuccess,
    focusCoffee
} = coffeeSlice.actions;

export default coffeeSlice.reducer;