import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { saveQuestionAnswer } from "../actions/questions";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Radio from "@material-ui/core/Radio";

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

function QuestionDetailed(props) {
  const { questions, users, authedUser } = props;
  const { questionId } = props.match.params;
  const question = questions[questionId];

  const [selectedValue, setSelectedValue] = React.useState("optionOne");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(selectedValue);
    console.log(authedUser);
    props.saveQuestionAnswer(authedUser, questionId, selectedValue);
  };

  const classes = useStyles();
  //   console.log(users[question.author].avatar);
  //   console.log(question.optionOne.text);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className={classes.root}>
        <Paper className={classes.paper} elevation="10">
          <h3
            style={{
              fontFamily: "Roboto",
              backgroundColor: "#e0e0e0",
              margin: 0,
              padding: "0.5em",
              marginBottom: "10px",
            }}
          >{`${question.author} asks:`}</h3>

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
                    Would you rather...
                  </h3>
                  <div>
                    <Radio
                      checked={selectedValue === "optionOne"}
                      onChange={handleChange}
                      value="optionOne"
                      color="secondary"
                    />
                    <span style={{ fontFamily: "Roboto", color: "#616161" }}>
                      {`${question.optionOne.text}`}
                    </span>
                  </div>
                  <div>
                    <Radio
                      color="secondary"
                      checked={selectedValue === "optionTwo"}
                      onChange={handleChange}
                      value="optionTwo"
                    />
                    <span style={{ fontFamily: "Roboto", color: "#616161" }}>
                      {`${question.optionTwo.text}`}
                    </span>
                  </div>
                  <Link
                    to="/questions/questionResult"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      onClick={(e) => handleSubmit()}
                      style={{
                        padding: "0.5em 3em",
                        color: "white",
                        backgroundColor: "#388e3c",
                      }}
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </Link>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser,
  };
}

export default connect(mapStateToProps, { saveQuestionAnswer })(
  QuestionDetailed
);
