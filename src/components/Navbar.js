import React from "react";
import { Layout, Menu } from "antd";

import { connect } from "react-redux";

function Navbar(props) {
  const { Header } = Layout;

  return (
    <Layout className="layout">
      <Header>
        <div />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">New Question</Menu.Item>
          <Menu.Item key="3">Leader Board</Menu.Item>

          {props.loading ? null : (
            <Menu.Item key="4">{`Hello ${
              props.users[props.authedUser].name
            }`}</Menu.Item>
          )}
          {props.loading ? null : <Menu.Item key="5">Logout</Menu.Item>}
        </Menu>
      </Header>
    </Layout>
  );
}
function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    authedUser,
    users,
  };
}
export default connect(mapStateToProps)(Navbar);
