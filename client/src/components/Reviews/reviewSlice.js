import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk("reviews/fetchReviews", () => {
    return fetch("http://localhost:4000/reviews")
    .then((res) => res.json())
    .then((reviews) => reviews)
})

export const deleteReview = createAsyncThunk("reviews/deleteReview", (id) => {
    return fetch(`http://localhost:4000/reviews/${id}`, {
        method: "DELETE",
    }).then((res) => res.json())
    .then((data) => data)
})
export const postReview = createAsyncThunk("reviews/postReview", (revform) => {
    return fetch("http://localhost:4000/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(revform),
    }).then((res) => res.json())
    .then((newReview) => newReview)
})

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
        [deleteReview.pending](state) {
          state.status = "loading";
        },
        [deleteReview.fulfilled](state, action) {
            debugger;
            const index = state.entities.findIndex((todo) => todo.id === action.payload);
            state.entities.splice(index, 1);
        },
        [postReview.pending](state) {
          state.status = "loading";
        },
        [postReview.fulfilled](state, action) {
            debugger;
            state.entities.push(action.payload)
            state.status = "idle";
        },
        [fetchReviews.pending](state){
            state.status = "loading";
        },
        [fetchReviews.fulfilled](state, action){
            state.entities = action.payload
        }
      },
})
export const { reviewAdded, reviewUpdated, reviewRemoved } = reviewsSlice.actions;

export default reviewsSlice.reducer;