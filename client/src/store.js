import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./components/Anime/animeSlice";

const store = configureStore({
    reducer: {
        animes: animeReducer,
    }
    
});

export default store;