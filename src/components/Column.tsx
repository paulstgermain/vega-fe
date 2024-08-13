import React from "react";
import Box from "@mui/material/Box";

function Column(jobs: Array<Job>, status: string) {

  return (
    <div>
      <h2>{status}</h2>
      <Box>
        {jobs.map((job, index) => {
          return (
            <div key={index}>
              <p>{job["title"]}</p>
            </div>
          );
        })}
      </Box>
    </div>
  );
}

export default Column;