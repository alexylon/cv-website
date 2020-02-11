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

import theology from "./images/theology.jpeg"

export function PassionLess({ openHandler }) {
  const classes = useStyles()
  return (
    <Grid item key={3} xs={12} sm={4} md={4}>
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
          <Typography>PhD in Theology</Typography>
          <p>
            Passionate about understanding the Bible, Theology, and what it
            means to be a Christian today - Theological Studies contributed a
            lot.
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

export function PassionMore({ closeHandler }) {
  const classes = useStyles()
  return (
    <Grid item key={3} xs={12} sm={4} md={4}>
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
            Passionate about understanding the Bible, Theology, and what it
            means to be a Christian today - Theological Studies contributed a
            lot.
          </p>
          <p>VOLUNTEERING:</p>
          <ul>
            <li>Orphanage volunteer programs.</li>
            <li>Sunday school teacher.</li>
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
