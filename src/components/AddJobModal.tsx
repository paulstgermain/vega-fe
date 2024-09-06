import React, { useEffect, useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

interface AddJobModalProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (newJob: any) => void; // Replace 'any' with your job type/interface
}

const AddJobModal: React.FC<AddJobModalProps> = ({ open, handleClose, handleSave }) => {
  const { user, isAuthenticated } = useAuth0();

  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = () => {
    if (isAuthenticated) {
      // make new job object
      const newJob = {
        auth_id: `${user?.sub}`,
        job_title: jobTitle,
        company_name: companyName,
        location: location,
        salary: salary,
        description: description,
        url: url,
        status: status,
      };
      // save new job
      handleSave(newJob);
      // reset all fields
      setJobTitle('');
      setCompanyName('');
      setLocation('');
      setSalary('');
      setDescription('');
      setUrl('');
      setStatus('');
      // close modal
      handleClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-job-modal-title"
      aria-describedby="add-job-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="add-job-modal-title" variant="h6" component="h2">
          Add New Job
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              label="Job Title"
              fullWidth
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Company Name"
              fullWidth
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Location"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Salary"
              fullWidth
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Job Posting URL"
              fullWidth
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="job-status-label">Status</InputLabel>
              <Select
                labelId="job-status-label"
                value={status}
                label="Status"
                onChange={(e) => setStatus(e.target.value as string)}
              >
                <MenuItem value="discovered">Discovered</MenuItem>
                <MenuItem value="applied">Applied</MenuItem>
                <MenuItem value="reached out">Reached Out</MenuItem>
                <MenuItem value="interviewing">Interviewing</MenuItem>
                <MenuItem value="offer received">Offer Received</MenuItem>
                <MenuItem value="hired">Hired</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
                <MenuItem value="ghosted">Ghosted</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'right' }}>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default AddJobModal;