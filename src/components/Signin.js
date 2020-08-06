import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Input, Button, Select } from "antd";
import logo from "../utils/images/logo.png";
import { setAuthedUser } from "../actions/authedUser";
const { Option } = Select;

class Signin extends Component {
  state = {
    authedId: null,
  };
  onChange = (e) => {
    console.log(e.target.value);
  };
  onClick = () => {
    this.props.dispatch(setAuthedUser(this.state.authedId));
  };

  render() {
    console.log();
    return (
      <div>
        {this.props.loading ? null : (
          <div className="signin-container">
            <div className="welcome">
              <h1>Welcome to the Would You Rather App!</h1>
              <h3>Please sign in to continue</h3>
            </div>

            <img className="logo" src={logo} />

            <h1 className="signin">Sign in</h1>
            <div className="form-container">
              <Form>
                <Form.Item>
                  <Select
                    onChange={(e) => this.onChange(e)}
                    placeholder="Select User"
                  >
                    <option value="null" disabled>
                      Select User
                    </option>
                    {Object.keys(this.props.users).map((user) => (
                      <option key={user} value={user}>
                        {this.props.users[user].name}
                      </option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item>
                  <Button
                    onClick={this.onClick}
                    type="primary"
                    htmlType="submit"
                  >
                    Sign in
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return { loading: users === null, users };
}
export default connect(mapStateToProps)(Signin);
