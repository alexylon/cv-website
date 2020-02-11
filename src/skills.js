import React from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Avatar,
  Chip
} from "@material-ui/core/"
import { useStyles } from "./styles"
import coding from "./images/coding.png"
import oca from "./images/oca.png"

export function SkillsLess({ openHandler }) {
  const classes = useStyles()
  return (
    <Grid item key={2} xs={12} sm={4} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={coding}
          title="coding"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Skills
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
            <Chip label="TypeScript" variant="outlined" />
            <Chip label="HTML" variant="outlined" />
            <Chip label="CSS" variant="outlined" />
            <Chip label="SQL" variant="outlined" />
          </div>
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

export function SkillsMore({ closeHandler }) {
  const classes = useStyles()
  return (
    <Grid item key={2} xs={12} sm={4} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={coding}
          title="coding"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Skills
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
            <Chip label="TypeScript" variant="outlined" />
            <Chip label="HTML" variant="outlined" />
            <Chip label="CSS" variant="outlined" />
            <Chip label="SQL" variant="outlined" />
          </div>
          <p>
            Most skills can be learned and improved, but the ability to solve
            problems and learn new technologies plus a mindset of interpersonal
            communication help me be a decent team player. I'm fascinated by
            coding and enjoy meeting like-minded people.
          </p>
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
