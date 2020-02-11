import React from "react"
import {
  Button,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core/"
import { useStyles } from "./styles"

export function PassionLess({ openHandler }) {
  const classes = useStyles()
  return (
    <>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Passion
        </Typography>
        <Typography variant="subtitle1">PhD in Theology</Typography>
        <p>
          Passionate about understanding the Bible, Theology, and what it means
          to be a Christian today - Theological Studies contributed a lot.
        </p>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={openHandler}>
          More
        </Button>
      </CardActions>
    </>
  )
}

export function PassionMore({ closeHandler }) {
  const classes = useStyles()
  return (
    <>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Passion
        </Typography>
        <Typography variant="subtitle1">PhD in Theology</Typography>
        <p>
          Passionate about understanding the Bible, Theology, and what it means
          to be a Christian today - Theological Studies contributed a lot.
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
    </>
  )
}
