import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Answer from "./Answer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  title: {
    marginTop: 30,
  },
  image: {
    backgroundImage: "url(/assets/main.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  answer: {
    textAlign: "center",
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.answer}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="sm">
            <Typography
              className={classes.title}
              variant="h2"
              component="h1"
              gutterBottom
            >
              Guess that anime
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              {
                "Randomly shuffle through the most popular anime songs and see how many you can name."
              }
            </Typography>
            <Answer />
          </Container>
        </div>
      </Grid>
    </Grid>
  );
}
