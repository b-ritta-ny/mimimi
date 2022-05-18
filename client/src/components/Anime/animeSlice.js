import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAnimes = createAsyncThunk("animes/fetchAnimes", () => {
    return fetch("http://localhost:4000/animes")
    .then((res) => res.json())
    .then((data) => data)
})

const animeSlice = createSlice({
    name: "animes",
    initialState: {
        entities: [],
        status: "idle", 
    },
    reducers: {
        animeAdded(state, action) {
            // using createSlice lets us mutate state!
            state.entities.push(action.payload);
        },
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
export const { animeAdded } = animeSlice.actions;

export default animeSlice.reducer;