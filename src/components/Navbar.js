import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { unsetAuthedUser } from "../actions/authedUser";
import logo from "../utils/images/logo.png";
import { makeStyles } from "@material-ui/styles";
import theme from "./ui/theme";
import { ThemeProvider } from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
} from "@material-ui/core";

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
  tabContainer: {
    marginLeft: "auto",
    color: "white",
  },
  logo: {
    marginLeft: "30px",
    height: "3.5em",
    width: "3.5em",
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
}));

function Navbar(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.log(value);
    setValue(newValue);
    console.log(value);
  };
  const { unsetAuthedUser } = props;
  const handleLogout = () => {
    unsetAuthedUser();
  };

  const classes = useStyles();

  return (
    <div style={{ marginBottom: "6em" }}>
      <ThemeProvider theme={theme}>
        <ElevationScroll>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
              <Link to="/">
                <img className={classes.logo} src={logo} alt="logo" />
              </Link>

              <Tabs
                className={classes.tabContainer}
                value={value}
                indicatorColor="secondary"
                onChange={handleChange}
              >
                <Tab
                  className={classes.tab}
                  label="Home"
                  component={Link}
                  to="/"
                />

                <Tab
                  className={classes.tab}
                  label="New Question"
                  component={Link}
                  to="/add"
                />
                <Tab
                  className={classes.tab}
                  label="Leader Board"
                  component={Link}
                  to="/leaderboard"
                />

                {props.loading ? null : (
                  <Tab
                    className={classes.tab}
                    label={`Hello \u00A0\u00A0 ${
                      props.users[props.authedUser].name
                    }`}
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
                  <Tab
                    onClick={handleLogout}
                    className={classes.tab}
                    label="Logout"
                    component={Link}
                    to="/"
                  />
                )}
              </Tabs>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </ThemeProvider>
    </div>
  );
}

function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    authedUser,
    users,
  };
}
export default connect(mapStateToProps, { unsetAuthedUser })(Navbar);
