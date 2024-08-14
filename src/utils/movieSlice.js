import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        newPlayingMovies: null,
    },
    reducers: {
        addNewPlayingMovies: (state, action) => {
            state.newPlayingMovies = action.payload;
        },
    },
});

// Correctly export the action creator
export const { addNewPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
