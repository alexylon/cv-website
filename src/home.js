import React, { useState } from "react"
import {
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Container,
  Avatar,
  Card,
  CardMedia
} from "@material-ui/core/"

import { useStyles } from "./styles"

import alex from "./images/alex.jpeg"
import Footer from "./footer"
import { SkillsMore, SkillsLess } from "./skills"
import { ExperienceMore, ExperienceLess } from "./experience"
import { PassionMore, PassionLess } from "./passion"
import experienceImg from "./images/experience.jpg"
import coding from "./images/coding.png"
import theology from "./images/theology.jpeg"

export default function Home() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const openHandler = () => setOpen(true)
  const closeHandler = () => setOpen(false)
  let skills
  let experience
  let passion
  if (open) {
    skills = <SkillsMore closeHandler={closeHandler} />
    experience = <ExperienceMore closeHandler={closeHandler} />
    passion = <PassionMore closeHandler={closeHandler} />
  } else {
    skills = <SkillsLess openHandler={openHandler} />
    experience = <ExperienceLess openHandler={openHandler} />
    passion = <PassionLess openHandler={openHandler} />
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
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={6}>
            <Grid item key={1} xs={12} sm={4} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={experienceImg}
                  title="experience"
                />
                {experience}
              </Card>
            </Grid>
            <Grid item key={2} xs={12} sm={4} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={coding}
                  title="coding"
                />
                {skills}
              </Card>
            </Grid>
            <Grid item key={3} xs={12} sm={4} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={theology}
                  title="theology"
                />
                {passion}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  )
}
