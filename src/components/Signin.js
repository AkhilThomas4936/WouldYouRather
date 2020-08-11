import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Button, Select } from "antd";
import logo from "../utils/images/logo.png";
import { setAuthedUser } from "../actions/authedUser";

class Signin extends Component {
  state = {
    authedId: null,
  };
  handleChange = (value) => {
    this.setState({
      authedId: value,
    });
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

            <img className="logo" src={logo} alt="logo" />

            <h1 className="signin">Sign in</h1>
            <div className="form-container">
              <Form>
                <Form.Item>
                  <Select
                    onChange={(value) => this.handleChange(value)}
                    placeholder="Select User"
                  >
                    <Select.Option value="null" disabled>
                      Select User
                    </Select.Option>
                    {Object.keys(this.props.users).map((user) => (
                      <Select.Option
                        key={user}
                        value={this.props.users[user].id}
                      >
                        {this.props.users[user].name}
                      </Select.Option>
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
