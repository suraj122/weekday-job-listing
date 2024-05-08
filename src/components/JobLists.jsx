import { Box, Container, Grid } from "@mui/material";
import JobCard from "./JobCard";

const JobLists = ({ jobListings }) => {
  console.log(jobListings);
  return (
    <Box component="main" sx={{ mt: 8 }}>
      <Box component="section">
        <Container maxWidth="xl" sx={{ px: "32px" }}>
          <Grid container spacing={6} sx={{ px: 8 }}>
            {jobListings?.map((job) => (
              <JobCard key={job.jdUid} job={job} />
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default JobLists;
