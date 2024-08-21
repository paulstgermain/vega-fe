import { useState, useEffect, Fragment } from 'react';
import Column from '../components/Column';
import { Grid, Box } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import ColumnDivider from '../components/ColumnDivider';
import AddJobButton from '../components/AddJobButton';
import AddJobModal from '../components/AddJobModal';

function Board() {
  const [jobs, setJobs] = useState<JobsByStatus | null>(null);
  const [updateJobs, setUpdateJobs] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect, user } = useAuth0();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveNewJob = async (newJob: any) => {
    // todo: add api call here
    const accessToken = await getAccessTokenSilently({
      authorizationParams: {
        audience: process.env.REACT_APP_API_AUDIENCE,
        scope: "read:current_user",
      },
    });
    fetch(`${process.env.REACT_APP_BE_NODE_API}/api/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(newJob),
    })
      .then((response) => response.json())
      .then((data) => {
        setUpdateJobs(true);
        console.log('New job added:', data);
      });
  };

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
  
      user && fetch(`${process.env.REACT_APP_BE_NODE_API}/api/jobs/auth/${user.sub}`, {
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
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '80vh', pt: 8, px: 2, mt: 2 }}>
      <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap', overflowY: 'hidden' }}>
        <Grid container spacing={0} sx={{ display: 'flex', flexWrap: 'nowrap' }}>
          {jobs &&
            columnOrder.map((status, index) => (
              <Fragment key={status}>
                <Grid item key={`${status}-column`} sx={{ minWidth: '300px' }}>
                  <Column jobs={jobs[status]} status={status} handleJobStatusChange={handleJobStatusChange}/>
                </Grid>
                {index < columnOrder.length - 1 && (
                  <Grid item key={`${status}-divider`} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    <ColumnDivider />
                  </Grid>
                )}
              </Fragment>
            ))}
        </Grid>
      </Box>
      <AddJobButton onClick={handleOpenModal} />

      <AddJobModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        handleSave={handleSaveNewJob}
      />
    </Box>
  );
}

export default Board;