import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Container,
  Avatar,
  Card,
  CardMedia,
  Button,
  CardActions,
  CardContent,
  Chip,
} from "@material-ui/core/";

import { useStyles } from "./styles";

import alex from "./images/alex.jpeg";
import Footer from "./footer";
import { MoreExperience, MoreSkills, MorePassion } from "./more-text";
import experienceImg from "./images/experience.jpg";
import coding from "./images/coding.png";
import theology from "./images/theology.jpeg";
import oca from "./images/oca.png";

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleHandler = () => setOpen(!open);
  let skills;
  let experience;
  let passion;
  let buttonName;
  if (open) {
    experience = <MoreExperience />;
    skills = <MoreSkills />;
    passion = <MorePassion />;
    buttonName = "LESS";
  } else {
    skills = "";
    experience = "";
    passion = "";
    buttonName = "MORE";
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Avatar alt="alex" src={alex} className={classes.bigAvatar} />
          <Typography variant="h6" color="inherit" noWrap>
            Alexander Alexandrov
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              HAPPINESS
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              is in diversity
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              I am motivated, educated and active person who wishes to apply
              their knowledge, skills and experience to new challenges
            </Typography>
            {/*
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
            */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={6}>
            <Grid item key={1} xs={12} sm={12} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={experienceImg}
                  title="experience"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Experience
                  </Typography>
                  <Typography variant="subtitle1">
                    Junior Software Developer{" "}
                  </Typography>
                  <ul>
                    <li>
                      Java Developer at DXC <br /> (Apr 2020 - present)
                    </li>
                    <li>
                      Web Developer Intern at Camplight <br />
                      (Sep 2019 - Apr 2020)
                    </li>
                  </ul>
                  {experience}
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={toggleHandler}>
                    {buttonName}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={2} xs={12} sm={12} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={coding}
                  title="coding"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Coding Skills
                  </Typography>
                  <div className={classes.root}>
                    <Chip
                      avatar={<Avatar alt="OCA" src={oca} />}
                      label="Java, Oracle Certified Associate"
                      component="a"
                      href="https://www.youracclaim.com/badges/13918dd1-e5ad-4e81-96c6-95fcb6fb8b3c"
                      clickable
                      color="primary"
                      variant="outlined"
                    />
                    <Chip label="Spring MVC" variant="outlined" />
                    <Chip label="Maven" variant="outlined" />
                    <Chip label="PostgreSQL" variant="outlined" />
                    <Chip label="JavaScript / TypeScript" variant="outlined" />
                    <Chip label="React.js" variant="outlined" />
                    <Chip label="Next.js" variant="outlined" />
                    <Chip label="HTML" variant="outlined" />
                    <Chip label="CSS" variant="outlined" />
                    <Chip label="GraphQL" variant="outlined" />
                    <Chip label="Git" variant="outlined" />
                  </div>
                  {skills}
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={toggleHandler}>
                    {buttonName}
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item key={3} xs={12} sm={12} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={theology}
                  title="theology"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Passion
                  </Typography>
                  <Typography variant="subtitle1">PhD in Theology</Typography>
                  <p>
                    Passionate about understanding spirituality and what it
                    means to be a Christian today - Theological Studies
                    contributed a lot.
                  </p>
                  {passion}
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={toggleHandler}>
                    {buttonName}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}
