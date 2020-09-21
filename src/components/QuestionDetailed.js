import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";

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
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function QuestionDetailed(props) {
  const { question, users } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation="10">
        <h2
          style={{
            backgroundColor: "#e0e0e0",
            margin: 0,
            padding: "0.5em",
            marginBottom: "10px",
          }}
        >{`${props.questions.id.author} asks:`}</h2>

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
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                {" "}
                <h3
                  style={{
                    color: "#616161",
                  }}
                >
                  Would you rather
                </h3>
                <h4>{question.optionOne.text.slice(3, 10)}</h4>
                <h4>{question.optionTwo.text.slice(3, 10)}</h4>
                <Button
                  style={{ padding: "0.5em 2.5em" }}
                  variant="contained"
                  color="secondary"
                >
                  View Full
                </Button>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

function mapStateToProps({ users, questions, authedUser }, { match }) {
  const id = match.params.id;
  return {
    id,
    questions,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(QuestionDetailed);
