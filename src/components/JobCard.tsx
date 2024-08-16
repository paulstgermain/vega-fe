import { Card, CardContent, CardActions, Typography, Button, FormControl, InputLabel, MenuItem, Select, CardHeader, Link } from '@mui/material';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { id, job_title, salary, company_name, location, url, description, status } = job;

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
    <div>
      <Card sx={{ minWidth: 200, marginTop: "12px", marginBottom: "24px", textOverflow: "ellipses" }}>
        <CardHeader
          sx={{ backgroundColor: getCardHeaderColor(status) }}
          // title={`${job_title} (${salary})`}
          // subheader={`${company_name} - ${location}`}
          // titleTypographyProps={{ fontSize: 16, color: '#FFFFFF', fontFamily: 'Montserrat' }}
          // subheaderTypographyProps={{ fontSize: 14, color: 'text.secondary' }}
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
          <Button size="small" color="secondary" variant="contained">View Job Data</Button>
          {/* <Link href={`${url}`} rel="noopener noreferrer" target="_blank"><Button size="small" color="primary" variant="outlined">To Job Post</Button></Link> */}
          <Button size="small" color="primary" variant="outlined">
            <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
              To Job Post
            </a>
          </Button>
          {/* <Typography sx={{ marginTop: '8px' }}variant="body2">
            <a href={url} target="_blank" rel="noreferrer">
              View Job Posting
            </a>
          </Typography> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default JobCard;