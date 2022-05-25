import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

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
export const deleteReview = createAsyncThunk("shows/deleteReview", (id, { rejectWithValue }) => {
    return fetch(`http://localhost:4000/reviews/${id}`, {
        method: "DELETE",
    }).then((res) => {
        if(res.ok){
            return id
        } else {
            return rejectWithValue("Not Authorized!")
        }
        })
})
export const postReview = createAsyncThunk("shows/postReview", (revform, { rejectWithValue }) => {
    return fetch("http://localhost:4000/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(revform),
    }).then((res) => {
        if(res.ok){
            return res.json().then((newReview) => {
                return newReview;
            })
        } else {
            return rejectWithValue("Not Valid!");
        }
    }).catch((error) => console.log(error))
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
            const review = state.entities.reviews.findIndex((review) => review.id === action.payload.id);
            state.entities.reviews.splice(review, 1)
            state.entities.reviews.push(action.payload)
        },
        [deleteReview.pending](state){
            state.status = "loading";
        },
        [deleteReview.fulfilled](state, action){
            const index = state.entities.reviews.findIndex((review) => review.id == action.payload)     
            state.entities.reviews.splice(index, 1)
        },  
        [deleteReview.rejected](state, action){
            state.status = action.payload
        },
        [postReview.pending](state) {
          state.status = "loading";
        },
        [postReview.fulfilled](state, action) {
            state.entities.reviews.push(action.payload)
            state.status = "idle";
        },
        [postReview.rejected](state, action){
            debugger;
            state.status = action.payload
        }
    },
})

export default showSlice.reducer;