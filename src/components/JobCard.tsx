import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { id, job_title, salary, company_name, location, url, description, status } = job;

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {job_title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            { company_name } - { location }
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            { salary }
            <br />
          </Typography>
          <Typography sx={{ marginTop: '8px' }}variant="body2">
            { description }
          </Typography>
          <Typography sx={{ marginTop: '8px' }}variant="body2">
            <a href={url} target="_blank" rel="noreferrer">
              View Job Posting
              </a>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View/Edit Job Data</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default JobCard;