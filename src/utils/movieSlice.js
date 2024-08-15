import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        newPlayingMovies: null,
        movieTrailer:null,
        trendingMovies:null,
        popularMovies:null,
        upcomingMovies:null,
    },
    reducers: {
        addNewPlayingMovies: (state, action) => {
            state.newPlayingMovies = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },

    },
});

// Correctly export the action creator
export const { addNewPlayingMovies ,addMovieTrailer,addPopularMovies,addTrendingMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
