import { useSelector } from "react-redux";

const JobLists = () => {
  const { data } = useSelector((store) => store.jobListing);
  console.log(data);
  return <div>JobLists</div>;
};

export default JobLists;
