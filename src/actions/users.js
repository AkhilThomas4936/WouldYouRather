export const RECEIVE_USERS = "RECEIVE_USERS";
export const USER_ANSWER_SAVE = "USER_ANSWER_SAVE";

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
