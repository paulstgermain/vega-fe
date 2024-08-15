import React from "react";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";
import { Typography } from "@mui/material";

const Column: React.FC<ColumnProps> = ({jobs, status}) => {

// make new const 'title' that makes the first letter of the status uppercase
  const title = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div>
      <Typography align="center" my={2} sx={{ fontSize: 32 }} color="text.primary">{title} ({jobs.length})</Typography>
      <Box sx={{ px: 1 }}>
        {jobs.map((job: Job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </Box>
    </div>
  );
}

export default Column;