import { useState, useEffect } from 'react';
import Column from '../components/Column';
import { Grid, Box } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

function Board() {
  const [jobs, setJobs] = useState<JobsByStatus | null>(null);
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } = useAuth0();

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
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
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