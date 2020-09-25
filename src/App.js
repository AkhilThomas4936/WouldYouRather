import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import NotFound from "./components/NotFound";
import QuestionDetailed from "./components/QuestionDetailed";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";

import { handleInitialData } from "./actions/shared";
import { Toolbar } from "@material-ui/core";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          {this.props.loading ? (
            <Route path="/" render={() => <SignIn />} />
          ) : (
            <Switch>
              <Route exact path="/" render={() => <HomePage />} />
              <Route
                exact
                path="/questions/:questionId"
                render={(props) => <QuestionDetailed {...props} />}
              />
              <Route exact path="/add" render={() => <NewQuestion />} />
              <Route exact path="/leaderboard" render={() => <Leaderboard />} />
              <Route render={() => <NotFound />} />
            </Switch>
          )}
        </Switch>
      </Fragment>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
