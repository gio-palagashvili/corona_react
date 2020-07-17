import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  createMuiTheme,
} from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  const theme = createMuiTheme({
    palette: {
      main: "#ff4400",
    },
  });
  return (
    <div className={styles.container}>
      <h1 className={styles.header1}>Covid-19 Cases In Georgia</h1>
      <Grid container spacing={3} justify="center">
        {/* infected */}
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
          xs={12}
          md={3.5}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration="1.5"
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active Covid-19 Cases
            </Typography>
          </CardContent>
        </Grid>
        {/* recovered */}
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
          xs={12}
          md={5}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoverd
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration="1.5"
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Recovered From Covid-19
            </Typography>
          </CardContent>
        </Grid>
        {/* dead */}
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.dead)}
          xs={12}
          md={5}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Dead
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration="1.5"
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Deaths From Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
