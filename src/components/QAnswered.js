import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
  Grid,
  Paper,
  ButtonBase,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

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
    marginTop: "30px",
  },
}));

//Making the linear progress

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 3,
    backgroundColor: "green",
  },
}))(LinearProgress);

export default function QAnswered(props) {
  const classes = useStyles();

  const {
    author,
    avatar,
    question,
    authedUser,
    optionOnePercent,
    optionTwoPercent,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
  } = props;

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
        >{`Asked by ${author} `}</h3>

        <Grid container spacing={2}>
          <Grid
            item
            style={{
              borderRightColor: "solid black 1px",
              margin: "auto 0px",
            }}
          >
            <ButtonBase
              className={classes.image}
              style={{
                paddingRight: "20px",
              }}
            >
              <img
                style={{ margin: 0 }}
                className={classes.img}
                alt="complex"
                src={avatar}
              />
            </ButtonBase>
          </Grid>
          <Grid
            item
            xs={12}
            sm
            container
            style={{ paddingLeft: "20px", borderLeft: "solid #e0e0e0 1px" }}
          >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                {" "}
                <h3
                  style={{
                    color: "black",
                    margin: 0,
                  }}
                >
                  Results
                </h3>
                <FormGroup>
                  {question.optionOne.votes.includes(authedUser) ? (
                    <FormControlLabel
                      value="optionOne"
                      control={<Checkbox style={{ color: "darkcyan" }} />}
                      label={question.optionOne.text}
                      checked
                    >
                      {/* {" "} */}
                      {optionOnePercent}
                    </FormControlLabel>
                  ) : (
                    <FormControlLabel
                      value="optionOne"
                      control={<Checkbox style={{ color: "darkcyan" }} />}
                      label={question.optionOne.text}
                      disabled
                    />
                  )}
                </FormGroup>
                <BorderLinearProgress
                  style={{ width: "100%" }}
                  variant="determinate"
                  value={(optionOneVotes / totalVotes) * 100}
                />
                <Typography
                  style={{ display: "inline" }}
                  variant="body2"
                  color="textSecondary"
                >
                  {`${optionOnePercent} % \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0  ${optionOneVotes} out of ${totalVotes}
                      votes`}
                </Typography>
                <div>
                  {question.optionTwo.votes.includes(authedUser) ? (
                    <FormControlLabel
                      value="optionTwo"
                      control={<Checkbox style={{ color: "darkcyan" }} />}
                      label={question.optionTwo.text}
                      checked
                    />
                  ) : (
                    <FormControlLabel
                      value="optionTwo"
                      control={<Checkbox style={{ color: "darkcyan" }} />}
                      label={question.optionTwo.text}
                      disabled
                    />
                  )}
                  <BorderLinearProgress
                    className={classes.progress}
                    variant="determinate"
                    value={(optionTwoVotes / totalVotes) * 100}
                  />
                  <Typography variant="body2" color="textSecondary">
                    {`${optionTwoPercent} %    \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0  ${optionTwoVotes} out of ${totalVotes}
                      votes`}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
