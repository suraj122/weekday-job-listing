import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

const JobCard = ({ job }) => {
  console.log(job);
  const {
    companyName,
    logoUrl,
    jobRole,
    location,
    minJdSalary,
    maxJdSalary,
    jobDetailsFromCompany,
  } = job;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ p: 2 }}>
        <Chip
          label="⏳Posted 10 days ago"
          variant="outlined"
          size="small"
          sx={{ fontSize: 9 }}
        />
        <Box component="header">
          <Box sx={{ display: "flex", gap: "0.5rem", mt: 2 }}>
            <Avatar
              alt={companyName}
              src={logoUrl}
              variant="square"
              sx={{ width: 32, height: 32 }}
            />
            <Box>
              <Typography
                component="h3"
                sx={{ fontSize: 13, fontWeight: 600, color: "#8b8b8b" }}
              >
                {companyName}
              </Typography>
              <Typography
                component="h2"
                sx={{ fontSize: 14, textTransform: "capitalize" }}
              >
                {jobRole}
              </Typography>
              <Typography
                component="h4"
                sx={{
                  fontSize: 11,
                  textTransform: "capitalize",
                  fontWeight: 500,
                }}
              >
                {location}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography
              variant="p"
              component="p"
              sx={{ fontSize: 14, color: "rgb(77, 89, 106)" }}
            >
              Estimated Salary: ₹ {minJdSalary}-{maxJdSalary} LPA ✅
            </Typography>
          </Box>
        </Box>
        <CardContent
          sx={{
            px: 0,

            position: "relative",
          }}
        >
          <Box
            sx={{
              height: 250,
              overflow: "hidden",
              maskImage:
                "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0));",
            }}
          >
            <Typography
              component="p"
              sx={{ fontSize: "1rem", fontWeight: 500 }}
            >
              About Company:
            </Typography>
            <Typography component="p" sx={{ fontSize: 14, fontWeight: 600 }}>
              About us
            </Typography>
            <Typography variant="p" component="p" sx={{ fontSize: 14 }}>
              {jobDetailsFromCompany}
            </Typography>
          </Box>
          <Box
            align="center"
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              align: "center",
              zIndex: 10,
              bgcolor: "white",
            }}
          >
            <Typography component="p" sx={{ color: "blue" }}>
              View
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default JobCard;
