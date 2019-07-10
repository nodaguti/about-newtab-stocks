import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { ChartCard } from "./ChartCard";

import { symbols } from "../symbols";

import "../reset.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  app: {
    marginTop: 76,
    display: "flex",
    flexWrap: "wrap"
  },
  card: {
    width: "50%",
    padding: 8
  }
});

export const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">about:newtab</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.app}>
        {symbols.map(({ symbol, url }) => (
          <React.Fragment key={symbol}>
            <div className={classes.card}>
              <ChartCard symbol={symbol} url={url} range="5d" />
            </div>
            <div className={classes.card}>
              <ChartCard symbol={symbol} url={url} range="6m" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
