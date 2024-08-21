import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import HeroBackground from "../components/HeroBackground";
import lyra from "../images/42_Leier.png";
import building from '../images/undraw_building_blocks_re_5ahy.svg';
import direction from '../images/undraw_right_direction_tge8.svg';

const About: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* "Why Vega?" Section */}
      <Box
        sx={{
          pt: 12,
          borderRadius: 2,
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          pb: 8,
        }}
      >
        <HeroBackground />
        <Container maxWidth="lg">
          <Typography variant="h3" color="common.white" gutterBottom>
            Why Vega?
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="body1" paragraph>
                    Vega has been extensively studied by astronomers, leading it
                    to be termed "arguably the next most important star in the
                    sky after the Sun".
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Due to the Earth’s position in the universe being variable,
                    we don’t always have the same North Star and, in about
                    12,000 years, Vega is predicted to be the next North Star in
                    the line.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    As a future North Star, to me Vega represents guidance,
                    change, and focus.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    To the ancient Greeks, the constellation Lyra was formed
                    from the harp of Orpheus, with Vega as its handle. As such,
                    I would like for this app to be the instrument of guidance
                    and focus for all job seekers.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Read more here:{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Vega"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#dc2273" }}
                    >
                      Vega on Wikipedia
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 2,
                }}
              >
                <img
                  src={lyra}
                  alt="Vega"
                  style={{
                    width: "85%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Strategy Section (talk about how it helped me) */}
      <Box
        sx={{
          bgcolor: "success.light",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Card
              sx={{
                display: "flex",
                ml: 15,
                p: 2,
                width: "165%",
                alignItems: "center",
                bgcolor: "",
                color: "text.primary",
              }}>
                <CardMedia
                  component="img"
                  sx={{ width: 320, px: 2 }}
                  image={direction}
                  alt="Direction"
                />
                <CardContent>
                  <Typography
                    variant="h3"
                    color="text.primary"
                    gutterBottom
                    sx={{ fontSize: "2.5rem", lineHeight: 1.2 }}
                  >
                    The Origin of the Strategy
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    color="text.primary"
                    sx={{ fontSize: "1.125rem", lineHeight: 1.6 }}
                  >
                    A few years ago, I found myself at a crossroads. Fresh out of a coding boot camp, with the basics of web development under my belt, I was eager to break into the tech industry. But the journey was harder than I anticipated. The job rejections started piling up, and with each one, my confidence took a hit.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    color="text.primary"
                    sx={{ fontSize: "1.125rem", lineHeight: 1.6 }}
                  >
                    Then, a mentor shared a strategy with me that changed everything. This approach wasn’t just about applying to jobs; it was about staying focused, organized, and most importantly, optimistic. It gave me the structure I needed to navigate the job market with purpose and perseverance. That strategy became the foundation for this app.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Upskilling Section (another reason I built this...) */}
      <Box
        sx={{
          bgcolor: "secondary.light",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Card
                sx={{
                  display: 'flex',
                  ml: 15,
                  p: 2,
                  width: "165%",
                  alignItems: "center",
                  bgcolor: "",
                  color: "text.primary",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ fontSize: "2.5rem", lineHeight: 1.2 }}
                  >
                    The Drive Behind the App
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: "1.125rem", lineHeight: 1.6 }}
                  >
                    This app wasn’t just born out of necessity—it's become a lifeline during a challenging time. After experiencing a layoff, I knew I needed something to keep my skills sharp and my job search organized. The tool I had relied on during my boot camp days was suddenly out of reach. That’s when it hit me: why not build it myself and make it even better?
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: "1.125rem", lineHeight: 1.6 }}
                  >
                    What started as a way to regain control over my career quickly turned into a passion project. This app is more than just a tool; it’s a testament to resilience, growth, and the belief that with the right resources, we can all navigate our paths with confidence. And this is just the beginning—there’s so much more to come.
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 320, px: 2 }}
                  image={building}
                  alt="Building"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
