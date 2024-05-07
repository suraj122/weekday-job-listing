import { useDispatch } from "react-redux";
import FilterBar from "./components/FilterBar";

import { useEffect } from "react";
import { fetchJobListings } from "./utils/store/jobListingSlice";
import JobLists from "./components/JobLists";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobListings());
  }, [dispatch]);
  return (
    <>
      <FilterBar />
      <JobLists />
    </>
  );
}

export default App;
