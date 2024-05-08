import { useEffect, useState, useRef } from "react";
import FilterBar from "./components/FilterBar";
import JobLists from "./components/JobLists";

function App() {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const pageOffset = useRef(0);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: pageOffset.current,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const fetchJobListings = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      if (data.jdList.length > 0) {
        setJobListings((prevListings) => [...prevListings, ...data.jdList]);
        pageOffset.current += 10; // Increment page offset for the next fetch
      } else {
        setHasMore(false); // No more listings available
      }
    } catch (error) {
      console.error("Error fetching job listings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobListings(); // Initial fetch
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !loading &&
      hasMore
    ) {
      fetchJobListings(); // Fetch more listings when scrolled to the bottom
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <>
      <FilterBar />
      <JobLists jobListings={jobListings} />
      {loading && <div>Loading...</div>}
      {!hasMore && <div>No more job listings</div>}
    </>
  );
}

export default App;
