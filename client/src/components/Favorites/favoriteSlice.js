import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFavorites = createAsyncThunk("favorites/fetchFavorites", () => {
    return fetch("http://localhost:4000/favorites")
    .then((res) => res.json())
    .then((fetchedFavorites) => fetchedFavorites)
})
export const postFavorite = createAsyncThunk("favorites/postFavorite", (anime_id) => {
    return fetch("http://localhost:4000/favorites", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({anime_id})
    })
    .then((res) => res.json())
    .then((newFavorite) => {
        console.log(newFavorite)
        return newFavorite
    })
})

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
        [postFavorite.pending](state) {
          state.status = "loading";
        },
        [postFavorite.fulfilled](state, action) {
          state.entities.push(action.payload)
          state.status = "idle";
        },
      },
})
export const { favoriteAdded } = favoriteSlice.actions;

export default favoriteSlice.reducer;