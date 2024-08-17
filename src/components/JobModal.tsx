import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const JobModal: React.FC<JobModalProps> = ({ open, handleClose, job, handleSave }) => {
  const [jobInfo, setJobInfo] = useState(job);

  useEffect(() => {
    setJobInfo(job);
  }, [job]);

  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setJobInfo({ ...jobInfo, [name as string]: value });
  };

  const handleSubmit = () => {
    handleSave(jobInfo);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Job Information
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Job Title"
          name="job_title"
          value={jobInfo.job_title}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Salary"
          name="salary"
          value={jobInfo.salary}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Company"
          name="company_name"
          value={jobInfo.company_name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Location"
          name="location"
          value={jobInfo.location}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="URL"
          name="url"
          value={jobInfo.url}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={jobInfo.description}
          multiline
          rows={4}
          onChange={handleChange}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={jobInfo.status}
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
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleClose} sx={{ mr: 2 }}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default JobModal;