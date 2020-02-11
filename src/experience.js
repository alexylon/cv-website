import React from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core/"
import { useStyles } from "./styles"

import experience from "./images/experience.jpg"

export function ExperienceLess({ openHandler }) {
  const classes = useStyles()
  return (
    <Grid item key={1} xs={12} sm={4} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={experience}
          title="experience"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Experience
          </Typography>
          <Typography variant="subtitle1">
            Product Manager & Furniture Engineer{" "}
          </Typography>
          <p>
            With rich background as a Technical Product Manager I aim to
            implement my abilities in the profession of a Web Developer.
          </p>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={openHandler}>
            More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export function ExperienceMore({ closeHandler }) {
  const classes = useStyles()
  return (
    <Grid item key={1} xs={12} sm={4} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={experience}
          title="experience"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Experience
          </Typography>
          <Typography>Product Manager & Furniture Engineer </Typography>
          <p>
            With rich background as a Technical Product Manager I aim to
            implement my abilities in the profession of a Web Developer.
          </p>
          <p>KEY RESPONSIBILITIES:</p>
          <ul>
            <li>
              {" "}
              Specifying market requirements for current and future products by
              conducting market research.
            </li>
            <li> Analyzing potential partner relationships for the product.</li>
            <li>
              Managing and coaching the sales force of the key distributors.
            </li>
            <li>
              {" "}
              Organizing product presentations as well as trainings for
              particular target groups.
            </li>
            <li> Negotiating and execution contracts with suppliers.</li>
            <li> Preparing market, product, sales and financial analysis.</li>
          </ul>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={closeHandler}>
            Less
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
