import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice';
import nowPlayingSlice from './nowplayingSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        user: userSlice,
        nowPlaying:nowPlayingSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;