import React from "react";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";

const Column: React.FC<ColumnProps> = ({jobs, status}) => {

// make new const 'title' that makes the first letter of the status uppercase
  const title = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div>
      <h2>{title}</h2>
      <Box>
        {jobs.map((job: Job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </Box>
    </div>
  );
}

export default Column;