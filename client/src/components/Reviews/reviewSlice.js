import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: [], // array of reviews
        status: "idle", // loading state
      },
    reducers: {
        reviewAdded(state, action){
            // using createSlice lets us mutate state!
            state.entities.push(action.payload);
        },
        reviewUpdated(state, action){
            const review = state.entities.find((comment) => comment.id === action.payload.id);
            review.url = action.payload.url;
        },
        reviewRemoved(state, action){
            const index = state.entities.findIndex((todo) => todo.id === action.payload);
            state.entities.splice(index, 1);
        }
    },
    extraReducers: {
        // handle async action types
        
        
      },
})
export const { reviewAdded, reviewUpdated, reviewRemoved } = reviewsSlice.actions;

export default reviewsSlice.reducer;