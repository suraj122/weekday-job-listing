import { AppBar, Autocomplete, Container, TextField } from "@mui/material";

const FilterBar = () => {
  const options = ["The Godfather", "Pulp Fiction"];
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container maxWidth="xl" sx={{ py: 2, display: "flex", gap: 2 }}>
        <Autocomplete
          disablePortal
          id="roles"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Roles" />}
        />
        <Autocomplete
          disablePortal
          id="employee"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Number of Employees" />
          )}
        />
        <Autocomplete
          disablePortal
          id="experience"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Experience" />}
          placeholder="Custom Placeholder"
        />
        <Autocomplete
          disablePortal
          id="remote"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Remote" />}
        />
        <Autocomplete
          disablePortal
          id="salary"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Min Base Salary" />
          )}
        />
        <TextField
          id="company"
          label="Compnay Name"
          placeholder="Search Company Name"
          variant="outlined"
        />
      </Container>
    </AppBar>
  );
};

export default FilterBar;
