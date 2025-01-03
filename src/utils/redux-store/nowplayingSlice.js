import { createSlice } from "@reduxjs/toolkit";

const nowPlaying = createSlice({
    name: "nowPlaying",
    initialState: {
        movies: [],
        default:null
    },
    reducers: {
        setNowPlayingMovies(state, action) {
            state.movies = action.payload;
        },
        setDefaultPlayingMovies(state, action) {
            state.default = action.payload;
        },
    },
})

export const { setNowPlayingMovies, setDefaultPlayingMovies } = nowPlaying.actions;
export default nowPlaying.reducer;