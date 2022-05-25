import { configureStore } from "@reduxjs/toolkit";
import animeSlice from "./components/Anime/animeSlice";
import favoriteSlice from "./components/Favorites/favoriteSlice";
import showSlice from "./components/Show/showSlice";

const store = configureStore({
    reducer: {
        animes: animeSlice,
        favorites: favoriteSlice,
        shows: showSlice,
    }
});

export default store;

