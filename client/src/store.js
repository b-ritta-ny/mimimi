import { configureStore } from "@reduxjs/toolkit";
import animeSlice from "./components/Anime/animeSlice";
import favoriteSlice from "./components/Favorites/favoriteSlice";
import reviewSlice from "./components/Reviews/reviewSlice";
import showSlice from "./components/Show/showSlice";

const store = configureStore({
    reducer: {
        animes: animeSlice,
        reviews: reviewSlice,
        favorites: favoriteSlice,
        shows: showSlice,
    }
    
});

export default store;