import { configureStore } from "@reduxjs/toolkit";
import animeSlice from "./components/Anime/animeSlice";
import favoriteSlice from "./components/Favorites/favoriteSlice";
import reviewSlice from "./components/Reviews/reviewSlice";

const store = configureStore({
    reducer: {
        animes: animeSlice,
        reviews: reviewSlice,
        favorites: favoriteSlice
    }
    
});

export default store;