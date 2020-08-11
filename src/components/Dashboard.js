import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { users, answeredQIds } = this.props;
    console.log(users);
    console.log(answeredQIds);
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
    users,
  };
}

export default connect(mapStateToProps)(Dashboard);
