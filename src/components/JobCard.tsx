import { Card, CardContent, CardActions, Typography, Button, FormControl, InputLabel, MenuItem, Select, CardHeader, SelectChangeEvent, Box } from '@mui/material';
import { ReactNode, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JobModal from './JobModal';

const JobCard: React.FC<JobCardProps> = ({ job, handleJobStatusChange, handleJobDeletion }) => {
  const { id, job_title, salary, company_name, location, url, description, status } = job;
  const { getAccessTokenSilently } = useAuth0();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSave = async (updatedJob: Job) => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: process.env.REACT_APP_API_AUDIENCE,
          scope: "read:current_user",
        },
      });
  
      const response = await fetch(`${process.env.REACT_APP_BE_NODE_API}/api/jobs/${updatedJob.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updatedJob),
      });
  
      if (response.status === 200) {
        console.log('Job updated successfully');
        // trigger a re-fetch to render changes in Board ui
        handleJobStatusChange(updatedJob.id, updatedJob.status);
      } else {
        console.error('Failed to update job');
      }
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleChange = (event: SelectChangeEvent<string>, child: ReactNode) => {
    const newStatus = event.target.value as string;
    handleJobStatusChange(id, newStatus);
  };

  const getCardHeaderColor = (status: string) => {
    switch (status) {
      case 'discovered':
        return 'primary.light';
      case 'applied':
        return 'success.light';
      case 'reached out':
        return 'info.light';
      case 'interviewing':
        return 'warning.light';
      case 'offer received':
        return 'info.dark';
      case 'hired':
        return 'success.main';
      case 'ghosted':
        return 'error.main';
      default:
        return 'primary.light';
    }
  }

  return (
    <Box sx={{
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '3px 2px 4px 0px rgba(220,34,115,0.32)',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '10px 10px 14px 3px rgba(220,34,115,0.32)',
        },
        position: 'relative',
    }}>
      <Card sx={{minWidth: 200,marginTop: "12px",marginBottom: "24px",textOverflow: "ellipses"}}>
        <CardHeader
          sx={{ backgroundColor: getCardHeaderColor(status) }}
        />
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            {job_title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            { company_name },
            <br />
            { location }
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            { salary }
            <br />
          </Typography>
          <Typography noWrap sx={{ marginTop: '8px' }}variant="body2">
            { description }
          </Typography>
          <FormControl sx={{ mt: 2, mb: 1, minWidth: 120 }} size="small">
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value="discovered">Discovered</MenuItem>
              <MenuItem value="applied">Applied</MenuItem>
              <MenuItem value="reached out">Reached Out</MenuItem>
              <MenuItem value="interviewing">Interviewing</MenuItem>
              <MenuItem value="offer received">Offer Received</MenuItem>
              <MenuItem value="hired">Hired</MenuItem>
              <MenuItem value="ghosted">Ghosted</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary" variant="contained" onClick={handleOpenModal}>View Job Data</Button>
          <Button size="small" color="primary" variant="outlined">
            <a href={`${url}`} target="_blank" rel="noopener noreferrer">
              To Job Post
            </a>
          </Button>
        </CardActions>
      </Card>
      <JobModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        job={job}
        handleSave={handleSave}
        handleDelete={handleJobDeletion}
      />
    </Box>
  );
}

export default JobCard;