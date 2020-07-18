import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.header1} style={{ color: "#E2E2E2" }}>
        Covid-19 Cases In Georgia
      </h1>
      <Grid container spacing={5} justify="center">
        {/* infected */}
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
          xs={10}
          md={12}
          style={{ background: "#1E1E1E" }}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              style={{
                color: "#E2E2E2",
              }}
            >
              Infected
            </Typography>
            <Typography variant="h5" style={{ color: "#ececec" }}>
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
          style={{ background: "#1E1E1E" }}
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
          xs={10}
          md={12}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoverd
            </Typography>
            <Typography variant="h5" style={{ color: "#ececec" }}>
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
          style={{ background: "#1E1E1E" }}
          item
          component={Card}
          className={cx(styles.card, styles.dead)}
          xs={10}
          md={12}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Dead
            </Typography>
            <Typography variant="h5" style={{ color: "#ececec" }}>
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
