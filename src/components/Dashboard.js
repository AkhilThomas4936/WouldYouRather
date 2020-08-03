import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}
function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions(b).timestamp - questions(a).timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
