export const RECEIVE_USERS = "RECEIVE_USERS";
export const USER_ANSWER_SAVE = "USER_ANSWER_SAVE";
export const USER_ADD_QUESTION = "USER_ADD_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
export function saveUserAnswer(authedUser, qid, answer) {
  console.log("This is also working fine");
  return {
    type: USER_ANSWER_SAVE,
    authedUser,
    qid,
    answer,
  };
}
export function addUserQuestion(authedUser, qid) {
  return {
    type: USER_ADD_QUESTION,
    authedUser,
    qid,
  };
}
