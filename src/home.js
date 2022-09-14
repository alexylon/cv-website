import React, {useState} from "react";
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
} from "@mui/material";

import {useStyles} from "./styles";

import alex from "./images/alex.jpeg";
import Footer from "./footer";
import {MoreHistory, MoreSkills, MoreSummary} from "./more-text";
import experienceImg from "./images/experience.jpg";
import coding from "./images/rust.png";
import theology from "./images/summary.jpg";
import oca from "./images/oca.png";

export default function Home() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const toggleHandler = () => setOpen(!open);
    let history;
    let skills;
    let summary;
    let buttonName;
    if (open) {
        history = <MoreHistory/>;
        skills = <MoreSkills/>;
        summary = <MoreSummary/>;
        buttonName = "LESS";
    } else {
        skills = "";
        history = "";
        summary = "";
        buttonName = "MORE";
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <Avatar alt="alex" src={alex} className={classes.bigAvatar}/>
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
                            I'm a permanent student, reader, and learner.
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
                                        Career History
                                    </Typography>
                                    <ul>
                                        <li>
                                            Software Developer at DXC <br/> (Apr 2020 - present)
                                        </li>
                                        <li>
                                            Web Developer Intern at Camplight <br/>
                                            (Sep 2019 - Apr 2020)
                                        </li>
                                        <li>
                                            Product Manager at KAME <br/>
                                            (Dec 1999 - Mar 2020)
                                        </li>
                                    </ul>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Education
                                    </Typography>
                                    <ul>
                                        <li>
                                            Camplight <br/> (React.js Fundamentals, Apr 2020)
                                        </li>
                                        <li>
                                            Sofia University <br/>
                                            (PhD of Theology, 2019)
                                        </li>
                                        <li>
                                            MaxPlus <br/>
                                            (Java 8 Fundamentals, 2018)
                                        </li>
                                        <li>
                                            University of Forestry <br/>
                                            (Master of Engineering, 1997)
                                        </li>
                                        <li>
                                            High School of Mathematics <br/>
                                            (Mathematics, 1990)
                                        </li>
                                    </ul>
                                    {history}
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
                                        Tech Skills
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" component="h2">
                                        Programming Languages:
                                    </Typography>
                                    <div className={classes.root}>
                                        <Chip
                                            avatar={<Avatar alt="OCA" src={oca}/>}
                                            label="Java, Oracle Certified Associate"
                                            component="a"
                                            href="https://www.youracclaim.com/badges/13918dd1-e5ad-4e81-96c6-95fcb6fb8b3c"
                                            clickable
                                            color="primary"
                                            variant="outlined"
                                        />
                                        <Chip label="JavaScript / TypeScript" variant="outlined"/>
                                        <Chip label="Rust" variant="outlined"/>
                                        <Chip label="HTML + CSS" variant="outlined"/>
                                    </div>
                                    <br/>
                                    <Typography gutterBottom variant="subtitle1" component="h2">
                                        Other Techs:
                                    </Typography>
                                    <div className={classes.root}>
                                        <Chip label="React.js" variant="outlined"/>
                                        <Chip label="Terraform" variant="outlined"/>
                                        <Chip label="Spring MVC" variant="outlined"/>
                                        <Chip label="WebAssembly (Wasm) with Rust" variant="outlined"/>
                                        <Chip label="Cytoscape.js" variant="outlined"/>
                                        <Chip label="Next.js" variant="outlined"/>
                                        <Chip label="PostgreSQL" variant="outlined"/>
                                        <Chip label="GraphQL" variant="outlined"/>
                                        <Chip label="Git" variant="outlined"/>
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
                                        Profile Summary
                                    </Typography>
                                    <p>
                                        Software engineering is my passion and I find it most satisfying to help interpret creative ideas into useful software tools.
                                        <br/>
                                        I value being in an environment where there is good opportunity to learn and where there are interesting technology challenges to encounter.
                                        <br/>
                                        I'm a fullstack engineer by trade. Keeping up with programming languages, frameworks, and design patterns is the permanent education we sign up for, yet it's also the means by which we work our creative magic. I believe it is important not to become compartmentalized or to let a skill set stagnate.
                                        <br/>
                                        My tech love remains Rust programming language. In this context as a theologian I would exclaim along with the timeless Bible verse "but the greatest of these is love" also "but the greatest of these is Rust".
                                    </p>
                                    {summary}
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
            <Footer/>
            {/* End footer */}
        </React.Fragment>
    );
}
