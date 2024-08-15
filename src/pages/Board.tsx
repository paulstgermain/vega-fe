import { useState, useEffect } from 'react';
import Column from '../components/Column';
import { Grid, Box } from '@mui/material';

function Board() {
  const [jobs, setJobs] = useState<JobsByStatus | null>(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/jobs/')
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    // <div>
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: 8, px: 2, mt: 2 }}>
      <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <Grid container spacing={2} sx={{ display: 'inline-flex', flexWrap: 'nowrap' }}>
          {jobs &&
            Object.keys(jobs).map((status) => (
              <Grid item key={status} sx={{ minWidth: '300px' }}>
                <Column jobs={jobs[status]} status={status} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Board;