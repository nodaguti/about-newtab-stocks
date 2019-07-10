import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import TradingViewWidget from "react-tradingview-widget";

const useStyles = makeStyles({
  range: {
    marginTop: 4
  },
  chart: {
    marginTop: 4,
    height: "200px"
  }
});

export const ChartCard = ({ symbol, range, url }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {symbol}
        </Typography>
        <Typography className={classes.range} color="textSecondary">
          {range}
        </Typography>
        <div className={classes.chart}>
          <TradingViewWidget
            symbol={symbol}
            range={range}
            locale="en"
            timezone="Asia/Tokyo"
            style="2"
            hide_top_toolbar
            hide_legend
            save_image={false}
            enable_publishing={false}
            autosize
          />
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" href={url}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
