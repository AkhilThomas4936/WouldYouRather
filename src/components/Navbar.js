import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from "../utils/images/logo.png";
// import { Link } from "@material-ui/core";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
  },

  tabContainer: {
    marginLeft: "auto",
    color: "white",
  },
  logo: {
    marginLeft: "30px",
    height: "3em",
    width: "3em",
    marginTop: "0.3em",
  },
  avatar: {
    height: "3.5em",
    width: "3.5em",
    paddingLeft: "0px",
  },

  tab: {
    fontWeight: 700,
    minWidth: 100,
    marginLeft: "25px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    marginTop: "0.4em",
  },
}));

function Navbar(props) {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/">
              <img className={classes.logo} src={logo} alt="logo" />
            </Link>

            <Tabs
              className={classes.tabContainer}
              value={0}
              indicatorColor="primary"
              // onChange={handleChange}
            >
              <Link to="/" className={classes.link}>
                <Tab className={classes.tab} label="Home" />
              </Link>

              <Link to="/newQuestion" className={classes.link}>
                <Tab className={classes.tab} label="New Question" />
              </Link>
              <Link to="/" className={classes.link}>
                <Tab className={classes.tab} label="Leader Board" />
              </Link>

              {props.loading ? null : (
                <Tab
                  className={classes.tab}
                  label={`Hello ${props.users[props.authedUser].name}`}
                  disabled
                />
              )}
              {props.loading ? null : (
                <Tab
                  label={
                    <img
                      className={classes.avatar}
                      src={props.users[props.authedUser].avatar}
                      alt="user's avatar"
                    />
                  }
                  disabled
                />
              )}
              {props.loading ? null : (
                <Tab className={classes.tab} label="Logout" />
              )}
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
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
