import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchShow = createAsyncThunk("shows/fetchShow", (id) => {
    return fetch(`http://localhost:4000/animes/${id}`)
    .then((res) => res.json())
    .then((show) => show)
})
export const updateReview = createAsyncThunk("shows/updateReview", (updated) => {
    return fetch(`http://localhost:4000/reviews/${updated.review_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updated),
      }).then((res) => res.json())
      .then((updatedReview) => updatedReview)
})
export const deleteReview = createAsyncThunk("shows/deleteReview", (id) => {
    return fetch(`http://localhost:4000/reviews/${id}`, {
        method: "DELETE",
    }).then((res) => res.json())
    .then((data) => {
        debugger;
        console.log(data);
    })
})
export const postReview = createAsyncThunk("shows/postReview", (revform) => {
    return fetch("http://localhost:4000/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(revform),
    }).then((res) => res.json())
    .then((newReview) => newReview)
})

const showSlice = createSlice({
    name: "shows",
    initialState: {
        entities: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: {
        [fetchShow.pending](state){
            state.status = "loading";
        },
        [fetchShow.fulfilled](state, action){
            state.entities = action.payload;
            state.status = "idle";
        },
        [updateReview.pending](state){
            state.status = "loading";
        },
        [updateReview.fulfilled](state, action){
            const review = state.entities.reviews.find((review) => review.id === action.payload.id);
            state.entities.reviews.splice(review, 1)
            state.entities.reviews.push(action.payload)
        },
        [deleteReview.pending](state,action){
            state.status = "loading";
            const index = state.entities.reviews.findIndex((review) => review.id === action.payload);
            state.entities.reviews.splice(index, 1);
        },
        
        [postReview.pending](state) {
          state.status = "loading";
        },
        [postReview.fulfilled](state, action) {
            state.entities.reviews.push(action.payload)
            state.status = "idle";
        },
    },
})

export default showSlice.reducer;