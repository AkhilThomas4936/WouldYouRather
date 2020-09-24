import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import newQuestion from "../utils/images/newQuestion.svg";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  CssBaseline,
  TextField,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: 0,
    margin: "auto",
    maxWidth: 600,
  },
  img: {
    width: "25em",
    height: "20em",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
    paddingBottom: "3em",
  },

  form: {
    width: "100%",
  },
}));

function NewQuestion(props) {
  // const [optionOne, setOptionOne] = React.useState("");
  // const [optionTwo, setOptionTwo] = React.useState("");
  const { register, handleSubmit } = useForm();

  // const optionOneOnChange = (e) => {
  //   setOptionOne(e.target.value);
  // };

  // const optionTwoOnChange = (e) => {
  //   setOptionTwo(e.target.value);
  // };

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Paper className={classes.paper} elevation={15}>
        <h1
          style={{
            margin: 0,
            marginTop: "10px",
            backgroundColor: "rgb(217, 226, 226)",
            textAlign: "center",

            padding: "1em 2em",
          }}
        >
          Create New Question
        </h1>
        <img
          className={classes.img}
          src={newQuestion}
          alt="two pwrsons asking questions"
        />
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          {/* <h4 style={{ margin: 0 }}>Complete the question :</h4> */}
          <h2 style={{ margin: 0 }}>Would You Rather...</h2>

          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <TextField
              ref={register}
              // onChange={optionOneOnChange}
              variant="outlined"
              margin="normal"
              required
              style={{ width: "100%" }}
              id="optionOne"
              label="Option One"
              name="optionOne"
              type="text"
              autoFocus
            />
            {/* <h4 style={{ margin: 0, textAlign: "center" }}>Or</h4> */}
            <TextField
              ref={register}
              style={{ width: "100%" }}
              // onChange={optionTwoOnChange}
              variant="outlined"
              margin="normal"
              required
              name="optionTwo"
              label="Option Two"
              type="text"
            />

            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                // onClick={() => onClick}
                style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  margin: "2em  0 3em 0",
                  width: "100%",
                }}
                // disabled={optionOne === "" || optionTwo === ""}
                type="submit"
                // variant="contained"
                // className={classes.submit}
              >
                Submit
              </Button>
            </Link>
          </form>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default connect()(NewQuestion);
