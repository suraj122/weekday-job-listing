import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const initialBody = JSON.stringify({
  limit: 10,
  offset: 0,
});

const initialRequestOptions = {
  method: "POST",
  headers: myHeaders,
  body: initialBody,
};

export const fetchJobListings = createAsyncThunk(
  "jobListings/fetchJobListings",

  async ({ limit, offset }) => {
    const requestOptions = {
      ...initialRequestOptions,
      body: JSON.stringify({ limit, offset }),
    };

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      return data.jdList;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const jobListingSlice = createSlice({
  name: "jobListing",
  initialState: {
    data: [],
    loading: false,
    error: null,
    hasMore: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobListings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload];
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchJobListings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobListingSlice.reducer;
