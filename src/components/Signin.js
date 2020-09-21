import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";

import Navbar from "../components/Navbar";

import welcome from "../utils/images/welcome.svg";

class SignInTest extends Component {
  state = {
    authedId: null,
  };
  handleChange = (e) => {
    this.setState({
      authedId: e.target.value,
    });
  };
  onClick = () => {
    this.props.dispatch(setAuthedUser(this.state.authedId));
  };
  render() {
    console.log(this.state.authedId);
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Paper className="signin-container" elevation="24">
          <div>
            <div style={{ fontFamily: "Helvetica Neue" }} className="welcome">
              <h1>Welcome to the Would You Rather App!</h1>
              <h3>Please sign in to continue</h3>
            </div>
            <img className="logo" src={welcome} alt="logo" />
            <h1 className="signin">Sign in</h1>

            <form className="form">
              <select
                onChange={(e) => this.handleChange(e)}
                placeholder="Select User"
              >
                <option value="null">Select User</option>
                {Object.keys(this.props.users).map((user) => (
                  <option key={user} value={this.props.users[user].id}>
                    {this.props.users[user].name}

                    {/* <img src={this.props.users[user].avatar} /> */}
                  </option>
                ))}
              </select>
              <Button
                style={{
                  width: "25%",
                  marginTop: "1.2em",
                }}
                variant="contained"
                color="secondary"
                onClick={this.onClick}
              >
                Signin
              </Button>
            </form>
          </div>
        </Paper>
      </ThemeProvider>
    );
  }
}

function mapStateToProps({ users }) {
  return { loading: users === null, users };
}

export default connect(mapStateToProps)(SignInTest);
