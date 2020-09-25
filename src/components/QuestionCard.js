import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Button,
  ButtonBase,
  CssBaseline,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    marginTop: "10px",
    marginBottom: "20px",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto ",
    marginTop: "30px",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function QuestionCard(props) {
  const { question, users } = props;

  const classes = useStyles();
  const questionId = props.question.id;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <h3
          style={{
            fontFamily: "Roboto",
            backgroundColor: "rgb(217, 226, 226)",
            margin: 0,
            padding: "0.5em",
            marginBottom: "10px",
          }}
        >{`${users[question.author].name} asks:`}</h3>

        <Grid container spacing={2}>
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
                src={users[question.author].avatar}
              />
            </ButtonBase>
          </Grid>
          <CssBaseline />
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                {" "}
                <h2
                  style={{
                    color: "black",
                  }}
                >
                  Would you rather
                </h2>
                <h3
                  style={{ fontFamily: "Roboto", color: "#616161" }}
                >{`__${question.optionOne.text.slice(0, 15)}__`}</h3>
                <Link
                  to={`questions/${questionId}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    style={{
                      padding: "0.5em 3em",
                      backgroundColor: "#4caf50",
                      color: "white",
                    }}
                    variant="contained"
                  >
                    View Full
                  </Button>
                </Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
