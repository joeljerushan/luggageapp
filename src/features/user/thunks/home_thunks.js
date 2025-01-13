import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestHomeLuggageGetPastDataService, requestHomeLuggageGetTodayDataService } from "../services/api_calls/home_service";

// Home Luggage Get Today Data Thunk ----
export const  requestHomeLuggageGetTodayDataThunk = createAsyncThunk( 
    '@/home/today/oders',
    // if you type your function argument here
    async (_, { rejectWithValue }) => {
        try {
            const response = await requestHomeLuggageGetTodayDataService();
            console.log('response----', response);
            return response.data;
        } catch (err) {
            const error = err; // cast the error for access
            if (!error) {
              throw err;
            }
            // We got validation errors, let's return those so we can reference in our component and set form errors
            return rejectWithValue(error);
          }
    }
);
// End Home Luggage Get Today Data Thunk ----

// Home Luggage Get Past Data Thunk ----
export const  requestHomeLuggageGetPastDataThunk = createAsyncThunk(
    '@/home/past/oders',
    // if you type your function argument here
    async (params, { rejectWithValue }) => {
        try {
            const response = await requestHomeLuggageGetPastDataService(params);
            console.log('response---- past', response?.data);
            return response.data;
        } catch (err) {
            const error = err; // cast the error for access
            if (!error) {
              throw err;
            }
            // We got validation errors, let's return those so we can reference in our component and set form errors
            return rejectWithValue(error);
          }
    }
)
// End Home Luggage Get Past Data Thunk ----
