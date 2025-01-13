import { createSlice } from '@reduxjs/toolkit';
import { requestHomeLuggageGetPastDataThunk, requestHomeLuggageGetTodayDataThunk } from '../thunks/home_thunks';
import { STATUS } from '../../../utils/status_constants';

// Default and Initial States
const DEFAULT_STATE = {
  homeSliceStatus: undefined,
  
  // Home Luggage Get Today Data
  homeLuggageGetTodayData: undefined,
  homeLuggageGetTodayDataStatus: undefined,

  // Home Luggage Get Past Data ---
  homeLuggageGetPastData: undefined,
  homeLuggageGetPastDataStatus: undefined
};

const INITIAL_STATE = {
  ...DEFAULT_STATE,
};

// Home slice with reducers and extra reducers
const home_slice = createSlice({
  name: 'home',
  initialState: INITIAL_STATE,
  reducers: {
    resetHome: () => {
      return DEFAULT_STATE;
    },
  },
  extraReducers: (builder) => {
    // Home Luggage Get Today Data Slice ---
    builder.addCase(requestHomeLuggageGetTodayDataThunk.pending, (state) => {
      state.homeSliceStatus = STATUS.LOADING;
      state.homeLuggageGetTodayDataStatus = STATUS.LOADING;
    });
    builder.addCase(requestHomeLuggageGetTodayDataThunk.fulfilled, (state, action) => {
      state.homeLuggageGetTodayData = action.payload;
      state.homeLuggageGetTodayDataStatus = STATUS.SUCCESS;
      state.homeSliceStatus = STATUS.SUCCESS;
    });
    builder.addCase(requestHomeLuggageGetTodayDataThunk.rejected, (state) => {
      state.homeLuggageGetTodayDataStatus = STATUS.FAILED;
      state.homeSliceStatus = STATUS.FAILED;
    });
    // End Home Luggage Get Today Data Slice ---

    // Home Luggage Get Past Data Slice ---
    builder.addCase(requestHomeLuggageGetPastDataThunk.pending, (state) => {
      state.homeSliceStatus = STATUS.LOADING;
      state.homeLuggageGetPastDataStatus = STATUS.LOADING;
    });
    builder.addCase(requestHomeLuggageGetPastDataThunk.fulfilled, (state, action) => {
      state.homeLuggageGetPastData = action.payload;
      state.homeLuggageGetPastDataStatus = STATUS.SUCCESS;
      state.homeSliceStatus = STATUS.SUCCESS;
    });
    builder.addCase(requestHomeLuggageGetPastDataThunk.rejected, (state) => {
      state.homeLuggageGetPastDataStatus = STATUS.FAILED;
      state.homeSliceStatus = STATUS.FAILED;
    });
    // End Home Luggage Get Past Data Slice ---
  },
});

// Actions
export const { resetHome } = home_slice.actions;

// Home Luggage Get Today Data Selectors ---
export const selectHomeLuggageGetTodayData = (state) => state.home.homeLuggageGetTodayData;
export const selectHomeLuggageGetTodayDataStatus = (state) => state.home.homeLuggageGetTodayDataStatus;
// End Home Luggage Get Today Data Selectors ---

// Home Luggage Get Past Data Selectors ---
export const selectHomeLuggageGetPastData = (state) => state.home.homeLuggageGetPastData;
export const selectHomeLuggageGetPastDataStatus = (state) => state.home.homeLuggageGetPastDataStatus;
// End Home Luggage Get Past Data Selectors ---

// Export the reducer
export default home_slice.reducer;
