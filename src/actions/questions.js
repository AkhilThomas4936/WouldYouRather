export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  console.log("this one is working");
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function addNewQuestion(question) {
  console.log("new question added to redux state");
  return {
    type: ADD_NEW_QUESTION,
    question,
  };
}
