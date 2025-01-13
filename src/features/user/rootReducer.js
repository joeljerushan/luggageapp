import { combineReducers } from '@reduxjs/toolkit';
import home_slice from './slices/home_slice';

const rootReducer = combineReducers({
    home: home_slice, // Correctly access the reducer here
});

export default rootReducer;
