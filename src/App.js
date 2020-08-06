import React, { Component } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "./App.css";
import Layout from "./components/Layout";
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
        {this.props.loading ? (
          <SignIn />
        ) : (
          <Layout>
            <Dashboard />
            <SignIn />
          </Layout>
        )}
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
