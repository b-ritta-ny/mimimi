import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchShow = createAsyncThunk("shows/fetchShow", (id) => {
    return fetch(`http://localhost:4000/animes/${id}`)
    .then((res) => res.json())
    .then((show) => show)
})
export const updateReview = createAsyncThunk("shows/updateReview", () => {
    return fetch(`http://localhost:4000/reviews/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(),
      }).then((res) => res.json())
      .then((data) => console.log(data))
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
            debugger;
            const review = state.entities.find((comment) => comment.id === action.payload.id);
        },
        [deleteReview.pending](state){
            debugger;
            state.status = "loading";
        },
        [deleteReview.fulfilled](state, action){
            debugger;
            const index = state.entities.findIndex((todo) => todo.id === action.payload);
            state.entities.splice(index, 1);
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