import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
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
    minExp,
  } = job;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card
        sx={{
          p: 2,
          height: "100%",
          transition: "transform 200ms ease-in",
          ":hover": {
            transform: " scale(1.02)",
          },
        }}
      >
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
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                height: 200,
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
              <Typography
                variant="p"
                component="p"
                sx={{ fontSize: 14, mt: 2 }}
              >
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
                py: 1,
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1))",
                cursor: "pointer",
              }}
            >
              <Typography component="p" sx={{ color: "blue" }}>
                View
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              component="h3"
              sx={{ fontSizwe: 13, fontWeight: 600, color: "#8b8b8b" }}
            >
              Minimum Experience
            </Typography>
            <Typography component="h2">{minExp || 0} years</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ flexDirection: "column" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "rgb(85, 239, 196)",
              width: "100%",
              color: "rgb(0,0,0)",
              textTransform: "capitalize",
              ":hover": {
                bgcolor: "rgb(85, 239, 196)",
              },
            }}
          >
            ⚡ Easy Apply
          </Button>

          <Button
            variant="contained"
            sx={{
              width: "100%",

              textTransform: "capitalize",
              ml: "0 !important",
              mt: 2,
            }}
          >
            <Avatar
              alt={companyName}
              src={logoUrl}
              variant="circle"
              sx={{ width: 32, height: 32, mr: 1, filter: "blur(1px)" }}
            />
            Unlock referral asks
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default JobCard;
