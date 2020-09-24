import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionCard from "../components/QuestionCard";

import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class Dashboard extends Component {
  state = {
    selectedTab: 0,
  };

  handleChange = (e, newValue) => {
    this.setState({
      selectedTab: newValue,
    });
  };

  render() {
    const { answeredQuestions, unAnsweredQuestions, users } = this.props;

    return (
      <Paper
        elevation="20"
        style={{
          width: "45%",
          margin: "auto",
          padding: " 0px",
          paddingBottom: "20px",
        }}
      >
        <Toolbar
          style={{
            backgroundColor: "#7986cb",
          }}
        >
          <Tabs
            value={this.state.selectedTab}
            onChange={this.handleChange}
            centered
            style={{
              margin: "auto",
            }}
          >
            <Tab label="Unanswered" />
            <Tab label="Answered" />
          </Tabs>
        </Toolbar>
        {this.state.selectedTab === 0 ? (
          <ul
            style={{
              padding: 0,
            }}
          >
            {unAnsweredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                users={users}
              />
            ))}
          </ul>
        ) : (
          <ul
            style={{
              padding: 0,
            }}
          >
            {answeredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                users={users}
              />
            ))}
          </ul>
        )}
      </Paper>
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
