import userReducer from '../utils/userSlice';
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../utils/movieSlice';
import gptReducer from '../utils/gptSlice'
import configReducer from '../utils/configSlice'
const appStore=configureStore({
    reducer:{
        user :userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config:configReducer
    }
})
export default appStore;