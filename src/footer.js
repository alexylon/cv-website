import React from "react";
import Link from "@material-ui/core/Link";
import { useStyles } from "./styles";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        <Link color="inherit" href="https://www.facebook.com/innoxius">
          <FacebookIcon className={classes.icon} />
        </Link>
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/alexandrovalexander/"
        >
          <LinkedInIcon className={classes.icon} />
        </Link>
        <Link color="inherit" href="mailto:euax@icloud.com">
          <MailIcon className={classes.icon} />
        </Link>
        <Link color="inherit" href="https://github.com/alexylon/alex-site">
          <GitHubIcon className={classes.icon} />
        </Link>{" "}
      </Typography>
    </footer>
  );
}
