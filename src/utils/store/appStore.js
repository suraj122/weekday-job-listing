import { configureStore } from "@reduxjs/toolkit";
import jobListingSlice from "./jobListingSlice";

const appStore = configureStore({
  reducer: {
    jobListing: jobListingSlice,
  },
});

export default appStore;
