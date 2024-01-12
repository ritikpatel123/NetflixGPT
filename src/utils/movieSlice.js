import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
    showCase: null,
    videos: null,
    now_playing: null,
    top_rated: null,
    popular: null,
    trending: null,
    tvShowIndia: null,
    tvShowInternationl: null,
    hollywood: null,
    bollywood: null,
    action: null,
    adventure: null,
    animation: null,
    comedy: null,
    crime: null,
    drama: null,
    family: null,
    horror: null,
    mystery: null,
    romance: null,
    scienceFiction: null,
    thriller: null,
    trailerVideo:null,
    },

    reducers:{
        addNowPlayingMovies:(state,action)=>{
            const {type,movieData}=action.payload
            state[type]=movieData;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})
export const {addNowPlayingMovies,addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;