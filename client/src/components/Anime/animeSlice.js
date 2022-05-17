import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAnimes = createAsyncThunk("animes/fetchAnimes", () => {
    // return a Promise containing the data we want
    return fetch("http://localhost:4000/animes")
        .then((res) => res.json())
        .then((cartoon) => console.log(cartoon))
})

const animeSlice = createSlice({
    name: "animes",
    initialState: {
        entities: [], // array of animes
        status: "idle", // loading state
    },
    reducers: {
        animeAdded(state, action) {
            // using createSlice lets us mutate state!
            state.entities.push(action.payload);
        },
        animeUpdated(state, action) {
            const anime = state.entities.find((anime) => anime.id === action.payload.id);
            anime.url = action.payload.url;
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
export const { animeAdded, animeUpdated } = animeSlice.actions;

export default animeSlice.reducer;