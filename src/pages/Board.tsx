import { useState, useEffect, ReactNode } from 'react';
import Column from '../components/Column';
import { Grid, Box, SelectChangeEvent } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

function Board() {
  const [jobs, setJobs] = useState<JobsByStatus | null>(null);
  const [updateJobs, setUpdateJobs] = useState<boolean>(false);
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } = useAuth0();

  const columnOrder = [
    'discovered',
    'applied',
    'reached out',
    'interviewing',
    'offer received',
    'hired',
    'ghosted',
  ];

  const handleJobStatusChange = async (jobId: string, newStatus: string) => {
    // Copy the existing jobs state
    const updatedJobs = { ...jobs };
  
    if (!updatedJobs[newStatus]) {
      console.error(`Status ${newStatus} does not exist in jobs.`);
      return;
    }
  
    // Find the old status and job
    const oldStatus = Object.keys(updatedJobs).find((status) =>
      updatedJobs[status].some((job) => job.id === jobId)
    );
  
    if (!oldStatus) {
      console.error(`Job with id ${jobId} not found.`);
      return;
    }
  
    const jobIndex = updatedJobs[oldStatus].findIndex((job) => job.id === jobId);
    const job = { ...updatedJobs[oldStatus][jobIndex], status: newStatus }; // Create a new job object with updated status
  
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: process.env.REACT_APP_API_AUDIENCE,
          scope: "read:current_user",
        },
      });
  
      const response = await fetch(`${process.env.REACT_APP_BE_NODE_API}/api/jobs/${jobId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
  
      const data = await response.json();
  
      if (data[0].id) {
        // Remove job from old status array
        const newOldStatusArray = updatedJobs[oldStatus].filter((j) => j.id !== jobId);
  
        // Add job to new status array
        const newNewStatusArray = [...updatedJobs[newStatus], data[0]];
  
        // Create a new state object
        const newJobsState = {
          ...updatedJobs,
          [oldStatus]: newOldStatusArray,
          [newStatus]: newNewStatusArray,
        };
  
        // Update the jobs state to trigger a re-render
        setJobs(newJobsState);
      }
    } catch (e) {
      if ((e as any).error === "consent_required") {
        await loginWithRedirect({
          authorizationParams: {
            audience: process.env.REACT_APP_API_AUDIENCE,
            scope: "read:current_user",
          },
        });
      } else {
        console.error(e);
      }
    }
  };

  const getJobs = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: process.env.REACT_APP_API_AUDIENCE,
          scope: "read:current_user",
        },
      });
  
      fetch(`${process.env.REACT_APP_BE_NODE_API}/api/jobs/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setJobs(data));
    } catch (e) {
      if ((e as any).error === "consent_required") {
        await loginWithRedirect({
          authorizationParams: {
            audience: process.env.REACT_APP_API_AUDIENCE,
            scope: "read:current_user",
          },
        });
      } else {
        console.error(e);
      }
    }
  };
  
  useEffect(() => {
    if (isAuthenticated) {
      getJobs();
      setUpdateJobs(false);
    }
  }, [getAccessTokenSilently, isAuthenticated, updateJobs]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: 8, px: 2, mt: 2 }}>
      <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <Grid container spacing={2} sx={{ display: 'inline-flex', flexWrap: 'nowrap' }}>
          {jobs &&
            columnOrder.map((status) => (
              <Grid item key={status} sx={{ minWidth: '300px' }}>
                <Column jobs={jobs[status]} status={status} handleJobStatusChange={handleJobStatusChange}/>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Board;