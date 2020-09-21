import React from "react";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from "../utils/images/logo.png";

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
  },
  logo: {
    marginLeft: "30px",
    height: "3em",
    width: "3em",
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
}));

function Navbar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <img className={classes.logo} src={logo} />

            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="New Question" />
              <Tab className={classes.tab} label="Leader Board" />
              {props.loading ? null : (
                <Tab
                  className={classes.tab}
                  label={`Hello ${props.users[props.authedUser].name}`}
                />
              )}
              {props.loading ? null : (
                <Tab
                  label={
                    <img
                      className={classes.avatar}
                      src={props.users[props.authedUser].avatar}
                    />
                  }
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
