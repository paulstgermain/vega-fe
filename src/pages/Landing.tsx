import React from 'react';
import { Typography, Button, Grid, Box, Card, CardContent, CardMedia } from '@mui/material';
import lyra from '../images/42_Leier.png';
import HeroBackground from '../components/HeroBackground';

const Landing: React.FC = () => {
  return (
    <Box width={"100%"}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mt: 8, borderRadius: 2, height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <HeroBackground />
        <Box sx={{ position: 'relative', zIndex: 1, width: '85%' }}>
          <Typography variant="h2" color="common.white" gutterBottom>
            Stressful job search?
          </Typography>
          <Typography variant="h5" color="common.white" gutterBottom>
            Welcome to Vega, an app designed to ease the job hunt for tech workers by enabling easy, nuanced management of job postings, statuses, and more.
          </Typography>
          <Typography variant="h6" color="common.white" sx={{ mt: 4 }}>Don't search alone:</Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
            Let Vega be your North Star.
          </Button>
        </Box>
      </Box>

      {/* The App Section */}
      <Box sx={{ width: '100%', height: '90vh', bgcolor: 'background.paper', py: 8 }}>
        <Grid container spacing={4} alignItems="center" sx={{ maxWidth: 'lg', mx: 'auto' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center' }}>
              <img
                src="path_to_your_gif.gif"
                alt="Vega in action"
                style={{ maxWidth: '100%', borderRadius: '8px' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '2.5rem', lineHeight: 1.2 }}>
              The App
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              Searching for your next opportunity can be messy. Between keeping track of which companies you've performed outreach for, keeping tabs on potential new opportunities, tracking potentially hundreds of job applications and their various statuses, and keeping any offers on the table top-of-mind, it can be a lot to manage!
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              With Vega, all of that is handled with our easy-to-use dashboard that presents all of the jobs you've applied for—no matter what stage they're in! Even better, you can edit any of the data you've collected, including their status, taking the burden of tracking your job search's health off your mind!
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* The Strategy Section */}
      <Box sx={{ width: '100%', bgcolor: 'success.light', py: 8 }}>
        <Grid container spacing={2} sx={{ maxWidth: 'lg', mx: 'auto' }}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: '2.5rem', lineHeight: 1.2, color: 'primary.contrastText' }}>
              The Strategy
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'primary.contrastText' }}>
              Searching for a new opportunity can also be stressful, especially if you've been affected by the ever-increasing yearly layoffs we face in our industry today. It can be incredibly helpful to operate your job search strategically while prioritizing your own mental health.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'primary.contrastText' }}>
              Ever feel like there just aren't enough jobs out there to apply to? You'd be surprised—using the Vega strategy, you'll always be able to approach your search from a mindset of abundance!
            </Typography>
          </Grid>

          {/* Day 1 */}
          <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', alignItems: 'center', bgcolor: '', color: 'text.primary' }}>
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="imagepathplaceholder.png"
                alt="Day 1 Icon"
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: '1.5rem', lineHeight: 1.4 }}>Day 1</Typography>
                <Typography variant="body2" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  Use the Vega browser extension to collect the data for as many job postings as possible. Make sure you're only adding postings from the last week or two, maximum—and don't apply to any of them!*
                  <br /><br />
                  <Typography color="text.secondary">*Unless you're feeling energized!</Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Day 2 */}
          <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', height: '227px', alignItems: 'center', bgcolor: '', color: 'text.primary' }}>
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="imagepathplaceholder.png"
                alt="Day 2 Icon"
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: '1.5rem', lineHeight: 1.4 }}>Day 2</Typography>
                <Typography variant="body2" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  Apply to as many of those postings as you can—job searching is a full-time job, so see how many you can do within an 8-hour shift! If you need a break, maybe add a few more postings to your "Discovered" job pool. This helps you maintain that abundance mindset!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Day 3 */}
          <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', alignItems: 'center', bgcolor: '', color: 'text.primary' }}>
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="imagepathplaceholder.png"
                alt="Day 3 Icon"
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: '1.5rem', lineHeight: 1.4 }}>Day 3</Typography>
                <Typography variant="body2" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  Perform outreach for as many of the jobs you applied to yesterday. Be it people in positions like the one you're aiming for, hiring managers, or the CEO, perform as much outreach as possible on this day! If you need a break, add more jobs to your list.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Day 4 */}
          <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', height: '201px', alignItems: 'center', bgcolor: '', color: 'text.primary' }}>
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="imagepathplaceholder.png"
                alt="Day 4 Icon"
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: '1.5rem', lineHeight: 1.4 }}>Day 4</Typography>
                <Typography variant="body2" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  Another pure job posting collection day! Give yourself a break—and look at how many high-quality job applications you pulled off in the last half week!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Day 5 - ? */}
          <Grid item xs={12} md={6}>
            <Card sx={{ display: 'flex', ml: 20, width: '145%', alignItems: 'center', bgcolor: '', color: 'text.primary' }}>
              <CardMedia
                component="img"
                sx={{ width: 80 }}
                image="imagepathplaceholder.png"
                alt="Day 5 Icon"
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: '1.5rem', lineHeight: 1.4 }}>Day 5 - ?</Typography>
                <Typography variant="body2" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  Repeat the process from Day 2! By following a targeted strategy, you always know what you're working on for any given day, and you never feel like you're running out of jobs to apply to.
                  <br /><br />
                  Of course, if this strategy feels silly to you, the Vega dashboard is still a handy tracking tool to enhance, and hopefully accelerate, your job hunt!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Why Vega Section */}
      <Box sx={{ width: '90%', py: 8, pl: 16 }}>
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
                  Read more here: <a href="https://en.wikipedia.org/wiki/Vega" target="_blank" rel="noopener noreferrer" style={{ color: "#dc2273" }}>Vega on Wikipedia</a>
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
    </Box>
  );
};

export default Landing;