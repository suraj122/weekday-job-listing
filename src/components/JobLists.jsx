import { Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";

const JobLists = () => {
  const { data, loading } = useSelector((store) => store.jobListing);

  return loading ? (
    <Typography variant="h4" component="h1" align="center">
      Loading...
    </Typography>
  ) : (
    <Box component="main" sx={{ mt: 8 }}>
      <Box component="section">
        <Container maxWidth="xl">
          <Grid container spacing={6} sx={{ px: 10 }}>
            {data.map((job) => (
              <JobCard key={job.jdUid} job={job} />
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default JobLists;
