import React, { Component } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/Signin";

import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
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
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
