import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

import logo from "../utils/images/logo.png";

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
      <div className="signin-container">
        <div className="welcome">
          <h1>Welcome to the Would You Rather App!</h1>
          <h3>Please sign in to continue</h3>
        </div>
        <img className="logo" src={logo} alt="logo" />
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
              </option>
            ))}
          </select>
          <button className="btn-signin" onClick={this.onClick}>
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { loading: users === null, users };
}

export default connect(mapStateToProps)(SignInTest);
