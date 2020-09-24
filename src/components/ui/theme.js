import { createMuiTheme } from "@material-ui/core/styles";

const fixViolet = "#3f51b5"; //violet
//
const fixBlue = "#1976d2"; //blue for buttons
const fixCrimson = "#DC143C"; //crimson

export default createMuiTheme({
  palette: {
    common: {
      fixViolet: `${fixViolet}`,
      fixBlue: `${fixBlue}`,
    },
    primary: {
      main: `${fixViolet}`,
    },
    secondary: {
      main: `${fixBlue}`,
    },
    error: {
      main: `${fixCrimson}`,
    },
    warning: {
      main: "#f44336", //crimson
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Montserrat",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
