import { useState, useEffect } from 'react';
import Column from '../components/Column';
import { Grid } from '@mui/material';

function Board() {
  const [jobs, setJobs] = useState<JobsByStatus | null>(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/jobs/')
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {jobs &&
          Object.keys(jobs).map((status) => (
            <Grid item xs={12} sm={6} md={2} key={status}>
              <Column jobs={jobs[status]} status={status} />
            </Grid>
          ))}
      </Grid>
      {/* {jobs && <Column jobs={jobs['discovered']} status="discovered" />}
      {jobs && <Column jobs={jobs['applied']} status="applied" />}
      {jobs && <Column jobs={jobs['reached out']} status="reached out" />}
      {jobs && <Column jobs={jobs['interviewing']} status="interviewing" />}
      {jobs && <Column jobs={jobs['offer received']} status="offer received" />}
      {jobs && <Column jobs={jobs['hired']} status="hired" />}
      {jobs && <Column jobs={jobs['ghosted']} status="ghosted" />} */}
    </div>
  );
}

export default Board;