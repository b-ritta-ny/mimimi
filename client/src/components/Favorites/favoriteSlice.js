import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFavorites = createAsyncThunk("favorites/fetchFavorites", () => {
    // return a Promise containing the data we want
    return fetch("https://localhost:4000/animes")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        entities: [], // array of animes
        status: "idle", // loading state
      },
    reducers: {
        favoriteAdded(state, action){
            // using createSlice lets us mutate state!
            state.entities.push(action.payload);
        },
        favoriteUpdated(state, action){
            const anime = state.entities.find((anime) => anime.id === action.payload.id);
            anime.url = action.payload.url;
        },
        favoriteRemoved(state, action){
            const index = state.entities.findIndex((todo) => todo.id === action.payload);
            state.entities.splice(index, 1);
        }
    },
    extraReducers: {
        // handle async action types
        [fetchFavorites.pending](state) {
          state.status = "loading";
        },
        [fetchFavorites.fulfilled](state, action) {
          state.entities = action.payload;
          state.status = "idle";
        },
      },
})
export const { favoriteAdded, favoriteUpdated } = favoriteSlice.actions;

export default favoriteSlice.reducer;