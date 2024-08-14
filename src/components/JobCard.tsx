import { Card, CardContent, CardActions, Typography, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { id, job_title, salary, company_name, location, url, description, status } = job;

  return (
    <div>
      <Card sx={{ minWidth: 200, marginTop: "12px", marginBottom: "12px", textOverflow: "ellipses" }}>
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
          <Typography sx={{ marginTop: '8px' }}variant="body2">
            <a href={url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              View Job Posting
            </a>
          </Typography>
          <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              label="Status"
              // onChange={handleStatusChange}
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
          <Button size="small">View/Edit Job Data</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default JobCard;