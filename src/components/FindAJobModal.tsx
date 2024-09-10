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
import { Link } from 'react-router-dom';

interface FindAJobModalProps {
  open: boolean;
  handleClose: () => void;
}

const FindAJobModal: React.FC<FindAJobModalProps> = ({ open, handleClose }) => {

  const [keywordOne, setKeywordOne] = useState('');
  const [keywordTwo, setKeywordTwo] = useState('');
  const [jobSite, setJobSite] = useState('');
  const [searchURL, setSearchURL] = useState('');
  const [showSearchURL, setShowSearchURL] = useState(false);

  const isFormValid = keywordOne && keywordTwo && jobSite;

  const handleSubmit = () => {
    const searchURL = `https://www.google.com/search?q=%22${keywordOne}%22+%22${keywordTwo}%22+site%3A${jobSite}&tbs=qdr:w`;
    setSearchURL(searchURL);
    setShowSearchURL(true);
  };

  useEffect(() => {
    if (!open) {
      setKeywordOne('');
      setKeywordTwo('');
      setJobSite('');
      setSearchURL('');
      setShowSearchURL(false);
    } 
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="find-a-job-modal-title"
      aria-describedby="find-a-job-modal-description"
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
        <Typography id="find-a-job-modal-title" variant="h6" component="h2">
          Welcome to the Vega Find-A-Job!
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              label="Keyword 1"
              fullWidth
              value={keywordOne}
              onChange={(e) => setKeywordOne(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Keyword 2"
              fullWidth
              value={keywordTwo}
              onChange={(e) => setKeywordTwo(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="job-site-label">Site to Search</InputLabel>
              <Select
                labelId="job-site-label"
                value={jobSite}
                label="Site to Search"
                onChange={(e) => setJobSite(e.target.value as string)}
              >
                <MenuItem value="https://jobs.ashbyhq.com/*/*">AshbyHQ</MenuItem>
                <MenuItem value="https://jobs.lever.co/*">Lever</MenuItem>
                <MenuItem value="https://apply.workable.com/*">Workable</MenuItem>
                <MenuItem value="https://boards.greenhouse.io/*">Greenhouse</MenuItem>
                <MenuItem value="https://jobs.jobvite.com/*/job/*">Jobvite</MenuItem>
                <MenuItem value="https://echojobs.io/job/*">EchoJobs</MenuItem>
                <MenuItem value="https://www.linkedin.com/jobs/view/*">LinkedIn</MenuItem>
                <MenuItem value="https://www.ycombinator.com/companies/*/jobs/*">YCombinator</MenuItem>
                <MenuItem value="https://remoteok.com/remote-jobs/*">RemoteOK</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          {showSearchURL && (
            <Typography
              component="div"
              sx={{
                wordBreak: 'break-all',
                overflowWrap: 'break-word',
                maxWidth: '100%',
              }}
            >
              <Link
                to={searchURL}
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                {searchURL}
              </Link>
            </Typography>
        )}
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'right' }}>
            <Button variant="outlined" color="error" sx={{ mr: 2 }} onClick={handleClose}>Close</Button>
            <Button variant="contained" color="secondary" disabled={!isFormValid} onClick={handleSubmit}>
              Get Link
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default FindAJobModal;