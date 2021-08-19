import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ReactAudioPlayer from "react-audio-player";
// songs
import songs from "./songs.json";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  media: {
    //height: 300,
    height: 0,
    paddingTop: "56.25%",
  },
  cardRoot: {
    maxWidth: 400,
    width: "100%",
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function Answer() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(0);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  function refreshSong() {
    setChecked(false);

    // run after 1 second
    const timer = setTimeout(() => {
      setIndex(Math.floor(Math.random() * (songs.length - 0) + 0));
    }, 1000);
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    refreshSong();
  }, []);

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show anime"
      />
      <div className={classes.container}>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            // {...(checked ? { timeout: 1000 } : {})}
          >
            <Card className={classes.cardRoot}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={songs[index].img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {songs[index].title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grow>
        </Grid>
      </div>
      <br />
      <ReactAudioPlayer src={songs[index].song} autoPlay controls />
      <br />
      <Button variant="outlined" onClick={() => refreshSong()}>
        Play new song
      </Button>
    </div>
  );
}
