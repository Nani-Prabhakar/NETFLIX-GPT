import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        newPlayingMovies: null,
        movieTrailer:null,
    },
    reducers: {
        addNewPlayingMovies: (state, action) => {
            state.newPlayingMovies = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        }
    },
});

// Correctly export the action creator
export const { addNewPlayingMovies ,addMovieTrailer} = movieSlice.actions;
export default movieSlice.reducer;
