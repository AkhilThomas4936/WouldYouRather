import React from "react";
import leads from "../utils/images/leaderBoard.svg";
import Navbar from "./Navbar";
import LeadCard from "./LeadCard";

import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import theme from "../components/ui/theme";
import { connect } from "react-redux";

function Leaderboard(props) {
  const { score, users } = props;
  console.log(score);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Paper
        elevation={20}
        style={{
          width: "50%",
          margin: "auto",
          padding: 0,
          paddingBottom: "20px",
        }}
      >
        <img
          style={{
            display: "block",
            height: "17em",
            width: "25em",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={leads}
          alt="leads"
        />
        {score.map((user, index) => (
          <LeadCard key={index} users={users} user={user} />
        ))}
      </Paper>
    </ThemeProvider>
  );
}

function mapStateToProps(state) {
  const { users } = state;
  const score = Object.keys(users).sort(
    (a, b) =>
      Object.keys(users[b].answers).length +
      users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  );
  return {
    score,
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
