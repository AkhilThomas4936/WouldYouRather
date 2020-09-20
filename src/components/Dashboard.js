import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionCard from "./QuestionCard";

class Dashboard extends Component {
  state = {
    toggle: true,
  };
  toggleScreen = () => {
    this.setState((previousState) => ({ toggle: !previousState.toggle }));
    console.log(this.state.toggle);
  };

  render() {
    const { answeredQuestions, unAnsweredQuestions, users } = this.props;

    console.log(answeredQuestions);
    console.log(unAnsweredQuestions);
    console.log(this.state.toggle);

    return (
      <div className="dashboard">
        <ul className="dashboard-nav">
          <li className="unanswered" onClick={() => this.toggleScreen}>
            Unanswered
          </li>
          <li className="answered" onClick={() => this.toggleScreen}>
            Answered
          </li>
        </ul>
        {this.state.toggle ? (
          <ul>
            {unAnsweredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                users={users}
              />
            ))}
          </ul>
        ) : (
          <ul>
            {answeredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                users={users}
              />
            ))}
          </ul>
        )}
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
