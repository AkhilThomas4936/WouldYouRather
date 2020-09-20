import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/theme";

import { connect } from "react-redux";
import "./App.css";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";

import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div>
            {this.props.loading ? (
              <div>
                <Navbar />
                <SignIn />
              </div>
            ) : (
              <div>
                <Navbar />
                <Dashboard />
              </div>
            )}
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
