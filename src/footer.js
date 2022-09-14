import React from "react";
import {Link, Typography} from "@mui/material";
import {useStyles} from "./styles";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
                <Link
                    color="inherit"
                    href="https://www.linkedin.com/in/alexandrovalexander/"
                >
                    <LinkedInIcon className={classes.icon}/>
                </Link>
                <Link color="inherit" href="mailto:cv@lexandrov.cc">
                    <MailIcon className={classes.icon}/>
                </Link>
                <Link color="inherit" href="https://github.com/alexylon">
                    <GitHubIcon className={classes.icon}/>
                </Link>{" "}
            </Typography>
        </footer>
    );
}
