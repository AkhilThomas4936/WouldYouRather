import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import NotFound from "./components/NotFound";
import QuestionDetailed from "./components/QuestionDetailed";
import NewQuestion from "./components/NewQuestion";

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
            <Route exact path="/newQuestion" render={() => <NewQuestion />} />
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
