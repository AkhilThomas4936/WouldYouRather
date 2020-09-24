import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "rgb(217, 226, 226)",
    margin: "auto",
    maxWidth: 500,
    marginTop: "10px",
    marginBottom: "20px",
  },
  image: {
    width: 140,
    height: 140,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function LeadCard(props) {
  const { user, users } = props;
  const classes = useStyles();
  const qAnswered = Object.keys(users[user].answers).length;
  const qCreated = Object.keys(users[user].questions).length;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <Grid container spacing={2} justify="space-between">
          <Grid
            item
            style={{
              borderRightColor: "solid black 1px",
            }}
          >
            <ButtonBase
              className={classes.image}
              style={{
                paddingRight: "20px",
                borderRight: "solid #e0e0e0 1px",
              }}
            >
              <img
                className={classes.img}
                alt="complex"
                src={users[user].avatar}
              />
            </ButtonBase>
          </Grid>
          <Grid item>
            <CssBaseline />
            <h2>{users[user].name}</h2>
            <div>
              <h3 style={{ margin: 0 }}>
                {" "}
                {`Answered questions:\u00A0\u00A0\u00A0\u00A0\u00A0 ${qAnswered}`}
              </h3>
              <h3
                style={{ margin: 0 }}
              >{`Created questions:\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ${qCreated}`}</h3>
            </div>
          </Grid>
          <Grid item>
            <h2>Score</h2>
            <h2
              style={{
                color: "white",
                backgroundColor: "#4caf50",
                marginTop: "1.2em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {qAnswered + qCreated}
            </h2>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
