import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button, ButtonBase, Radio } from "@material-ui/core";
import { _saveQuestionAnswer } from "../utils/_DATA";

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

export default function QUnanswered(props) {
  const {
    authedUser,
    questionId,
    author,
    avatar,
    question,
    saveQuestionAnswer,
    saveUserAnswer,
  } = props;
  const [selectedValue, setSelectedValue] = React.useState("optionOne");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = () => {
    saveQuestionAnswer(authedUser, questionId, selectedValue);
    saveUserAnswer(authedUser, questionId, selectedValue);
    _saveQuestionAnswer({
      authedUser,
      qid: questionId,
      answer: selectedValue,
    });
  };

  const classes = useStyles();
  console.log(props);

  return (
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
        >{`${author} asks:`}</h3>

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
              <img className={classes.img} alt="complex" src={avatar} />
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
                  to={`/questions/${questionId}`}
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
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
