import React from "react";
import { connect } from "react-redux";
import QUnanswered from "./QUnanswered";
import QAnswered from "./QAnswered";
import NotFound from "./NotFound";
import { saveQuestionAnswer } from "../actions/questions";
import { saveUserAnswer } from "../actions/users";
import { ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import theme from "../components/ui/theme";

function QuestionDetailed(props) {
  const {
    authedUser,
    question,
    questionId,
    author,
    avatar,
    answeredQuestion,
    optionOnePercent,
    optionTwoPercent,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    saveQuestionAnswer,
    saveUserAnswer,
  } = props;

  if (!question) {
    return <NotFound />;
  }
  return (
    <ThemeProvider theme={theme}>
      {!answeredQuestion ? (
        <QUnanswered
          authedUser={authedUser}
          questionId={questionId}
          author={author}
          avatar={avatar}
          question={question}
          saveQuestionAnswer={(authedUser, questionId, answer) =>
            saveQuestionAnswer(authedUser, questionId, answer)
          }
          saveUserAnswer={(authedUser, questionId, answer) =>
            saveUserAnswer(authedUser, questionId, answer)
          }
        />
      ) : (
        <QAnswered
          author={author}
          avatar={avatar}
          question={question}
          authedUser={authedUser}
          optionOnePercent={optionOnePercent}
          optionTwoPercent={optionTwoPercent}
          optionOneVotes={optionOneVotes}
          optionTwoVotes={optionTwoVotes}
          totalVotes={totalVotes}
        />
      )}
    </ThemeProvider>
  );
}

QuestionDetailed.propTypes = {
  authedUser: PropTypes.string.isRequired,
  question: PropTypes.object,
  questionId: PropTypes.string,
  author: PropTypes.string,
  avatar: PropTypes.string,
  answeredQuestion: PropTypes.any,
  optionOnePercent: PropTypes.any,
  optionTwoPercent: PropTypes.any,
  optionOneVotes: PropTypes.number.isRequired,
  optionTwoVotes: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  saveQuestionAnswer: PropTypes.func.isRequired,
  saveUserAnswer: PropTypes.func.isRequired,
};

function mapStateToProps({ questions, users, authedUser }, { match }) {
  const { questionId } = match.params;
  const question = questions ? questions[questionId] : null;
  const author = question ? users[question.author].name : null;
  const avatar = question ? users[question.author].avatar : null;
  const optionOneVotes = question ? question.optionOne.votes.length : 0;
  const optionTwoVotes = question ? question.optionTwo.votes.length : 0;
  const isOptionOneAnswered = question
    ? question.optionOne.votes.includes(authedUser)
    : "";
  const isOptionTwoAnswered = question
    ? question.optionTwo.votes.includes(authedUser)
    : "";
  const answeredQuestion = isOptionOneAnswered || isOptionTwoAnswered;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercent = question
    ? ((optionOneVotes / totalVotes) * 100).toFixed()
    : 0;
  const optionTwoPercent = question
    ? ((optionTwoVotes / totalVotes) * 100).toFixed()
    : 0;
  return {
    authedUser,
    question,
    questionId,
    author,
    avatar,
    answeredQuestion,
    optionOnePercent,
    optionTwoPercent,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
  };
}

export default connect(mapStateToProps, { saveQuestionAnswer, saveUserAnswer })(
  QuestionDetailed
);
