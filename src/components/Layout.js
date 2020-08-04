import React from "react";
import { Layout, Menu } from "antd";
import { connect } from "react-redux";

function customLayout(props) {
  const { Header, Content } = Layout;

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">New Question</Menu.Item>
          <Menu.Item key="3">Leader Board</Menu.Item>
          <Menu.Item key="4">{`Hello ${props.authedUser}`}</Menu.Item>
          <Menu.Item key="5">Logout</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </Layout>
  );
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(customLayout);
