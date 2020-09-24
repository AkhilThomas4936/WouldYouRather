import React from "react";
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
    paddingBottom: "3em",
  },

  form: {
    width: "100%",
  },
}));

export default function NewQuestion() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Paper className={classes.paper} elevation="10">
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
          alt="image of two pwrsons asking questions"
        />
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          {/* <h4 style={{ margin: 0 }}>Complete the question :</h4> */}
          <h2 style={{ margin: 0 }}>Would You Rather...</h2>

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="optionOne"
              label="Option One"
              name="optionOne"
              type="text"
              autoFocus
            />
            {/* <h4 style={{ margin: 0, textAlign: "center" }}>Or</h4> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="optionTwo"
              label="Option Two"
              type="text"
            />

            <Button
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                margin: 0,
                margin: "2em  0 3em 0",
              }}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}
