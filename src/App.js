import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomePage from "./components/HomePage";
import SignIn from "./components/Signin";
import NotFound from "./components/NotFound";
import QuestionDetailed from "./components/QuestionDetailed";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";

import { handleInitialData } from "./actions/shared";

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

App.propTypes = {
  handleInitialData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
