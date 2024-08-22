import React from "react";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";
import { Typography } from "@mui/material";

const Column: React.FC<ColumnProps> = ({jobs, status, handleJobStatusChange, handleJobDeletion}) => {

  const title = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div style={{ minHeight: '70vh' }}>
      <Typography align="center" mt={2} mb={4} sx={{ fontSize: 32 }} color="text.secondary" fontWeight={500}>{title} ({jobs ? jobs.length : 0})</Typography>
      <Box sx={{ px: 1 }}>
        {jobs && jobs.map((job: Job, index) => (
          <JobCard key={index} job={job} handleJobStatusChange={handleJobStatusChange} handleJobDeletion={handleJobDeletion} />
        ))}
        {(!jobs || jobs.length === 0) && (
          <Typography align="center" mt={2} mb={4} sx={{ fontSize: 16, wordWrap: 'break-word' }} color="text.secondary" fontWeight={500}>No jobs in this column</Typography>
        )}
      </Box>
    </div>
  );
}

export default Column;