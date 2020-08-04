import React, { Component } from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";

import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Dashboard />
        </Layout>
      </div>
    );
  }
}

export default connect()(App);
