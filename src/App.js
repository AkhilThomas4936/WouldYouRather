import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "../src/components/HomePage";
import SignIn from "../src/components/SignIn";
import NotFound from "../src/components/NotFound";
import QuestionDetailed from "../src/components/QuestionDetailed";

import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return (
      <Switch>
        {this.props.loading ? (
          <Route render={() => <SignIn />} />
        ) : (
          <Fragment>
            <Route exact path="/" render={() => <HomePage />} />
            <Route
              exact
              path="/questions/:questionId"
              render={(props) => <QuestionDetailed {...props} />}
            />
          </Fragment>
        )}
        {/* <Route render={() => <NotFound />} /> */}
      </Switch>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
