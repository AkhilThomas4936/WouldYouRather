import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionCard from "./QuestionCard";

class Dashboard extends Component {
  render() {
    const { answeredQuestions, unAnsweredQuestions, users } = this.props;

    console.log(answeredQuestions);
    console.log(unAnsweredQuestions);

    return (
      <div className="dashboard">
        <ul>
          {answeredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} users={users} />
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps({ questions, users, authedUser }) {
  const answeredQIds = Object.keys(users[authedUser].answers);

  const answeredQuestions = Object.values(questions)
    .filter((question) => answeredQIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const unAnsweredQuestions = Object.values(questions)
    .filter((question) => !answeredQIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answeredQuestions,
    unAnsweredQuestions,
    users,
  };
}

export default connect(mapStateToProps)(Dashboard);
