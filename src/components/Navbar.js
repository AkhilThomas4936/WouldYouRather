import React from "react";
import { connect } from "react-redux";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>New Question</li>
        <li>Leader Board</li>
        {props.loading ? null : (
          <li>{`Hello ${props.users[props.authedUser].name}`}</li>
        )}

        {props.loading ? null : <li>Logout</li>}
      </ul>
    </nav>
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
