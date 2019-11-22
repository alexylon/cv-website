import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import coding from "./images/coding.png";
import interior from "./images/interior.jpeg";
import theology from "./images/theology.jpeg";
import alex from "./images/alex.jpeg";
import oca from "./images/oca.png";
import Footer from "./footer";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";

export default function Home() {
  const classes = useStyles();
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
                  image={interior}
                  title="interior"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Interior
                  </Typography>
                  <Typography>Furniture Engineer & Product Manager</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={2} xs={12} sm={4} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={theology}
                  title="theology"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Theology
                  </Typography>
                  <Typography>PhD in Theology</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={3} xs={12} sm={4} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={coding}
                  title="coding"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Coding
                  </Typography>
                  <div className={classes.root}>
                    <Chip
                      avatar={<Avatar alt="Natacha" src={oca} />}
                      label="Oracle Associate"
                      component="a"
                      href="https://www.youracclaim.com/badges/13918dd1-e5ad-4e81-96c6-95fcb6fb8b3c"
                      clickable
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      label="Java SE8"
                      component="a"
                      href="https://www.youracclaim.com/badges/13918dd1-e5ad-4e81-96c6-95fcb6fb8b3c"
                      clickable
                      color="primary"
                      variant="outlined"
                    />
                    <Chip label="JavaScript" variant="outlined" />
                    <Chip label="React.js" variant="outlined" />
                    <Chip label="HTML" variant="outlined" />
                    <Chip label="CSS" variant="outlined" />
                    <Chip label="SQL" variant="outlined" />
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    More
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
