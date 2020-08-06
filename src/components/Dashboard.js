import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.authedUser);
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
function mapStateToProps({ questions, users, authedUser }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    answeredQIds: users.authedUser ? users.authedUser.answers : [],
    authedUser,
  };
}

export default connect(mapStateToProps)(Dashboard);
