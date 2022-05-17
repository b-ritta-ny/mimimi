import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchAnimes = createAsyncThunk("animes/fetchAnimes", () => {
//     // return a Promise containing the data we want
//     return fetch("https://localhost:4000/animes")
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   });

const animeSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: [], // array of animes
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
        [fetchAnimes.pending](state) {
          state.status = "loading";
        },
        [fetchAnimes.fulfilled](state, action) {
          state.entities = action.payload;
          state.status = "idle";
        },
      },
})
export const { reviewAdded, reviewUpdated, reviewRemoved } = animesSlice.actions;

export default animeSlice.reducer;