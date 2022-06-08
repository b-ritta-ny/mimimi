import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

export const fetchAnimes = createAsyncThunk("animes/fetchAnimes", (undefined, {rejectWithValue}) => {
    return fetch("http://localhost:4000/animes")
    .then((res) => {
        if(res.ok){
            return res.json().then((animes) => animes)
        } else {
            return res.json().then((data) =>{
                return rejectWithValue(data.error)
            })
        }
    })
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
        [fetchAnimes.rejected](state, action){
            debugger;
            state.status = "Empty Bitch"
        }
        
    },
})
export const { animeAdded } = animeSlice.actions;

export default animeSlice.reducer;