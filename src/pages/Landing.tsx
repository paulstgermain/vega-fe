import React from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardContent } from '@mui/material';
import lyra from '../images/42_Leier.png';

const Landing: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 14 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', my: 8, borderRadius: 2 }}>
        <Typography variant="h2" gutterBottom>
          Job search got you stressed?
        </Typography>
        <Typography variant="h5" gutterBottom>
          Welcome to Vega, designed to ease the job hunt for tech workers by enabling easy, nuanced management of job postings, statuses, and more.
        </Typography>
        <Typography variant="h6" sx={{ mt: 4 }}>Don't search alone:</Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
          Let us be your North Star.
        </Button>
      </Box>

      {/* Why Vega Section */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h3" gutterBottom>
          Why Vega?
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="body1" paragraph>
                  Vega has been extensively studied by astronomers, leading it to be termed "arguably the next most important star in the sky after the Sun".
                </Typography>
                <Typography variant="body1" paragraph>
                  Due to the Earth’s position in the universe being variable, we don’t always have the same North Star and, in about 12,000 years, Vega is predicted to be the next North Star in the line.
                </Typography>
                <Typography variant="body1" paragraph>
                  As a future North Star, to me Vega represents guidance, change, and focus.
                </Typography>
                <Typography variant="body1" paragraph>
                  To the ancient Greeks, the constellation Lyra was formed from the harp of Orpheus, with Vega as its handle. As such, I would like for this app to be the instrument of guidance and focus for all job seekers.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Read more here: <a href="https://en.wikipedia.org/wiki/Vega" target="_blank" rel="noopener noreferrer">Vega on Wikipedia</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
              }}
            >
            <img
              src={`${lyra}`}
              alt="Vega"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
            </ Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Landing;