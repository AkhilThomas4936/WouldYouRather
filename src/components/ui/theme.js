import { createMuiTheme } from "@material-ui/core/styles";

const violet = "#3f51b5"; //violet
const blue = "#1976d2"; //blue for buttons
const crimson = "#DC143C"; //crimson

export default createMuiTheme({
  palette: {
    common: {
      violet: `${violet}`,
      blue: `${blue}`,
    },
    primary: {
      main: `${violet}`,
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: `${crimson}`,
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
