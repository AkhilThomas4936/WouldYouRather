import { createMuiTheme } from "@material-ui/core/styles";

const fixWhite = "#F5F5F5";
const fixBlue = "#1976d2";
const fixGreen = "#388e3c";

export default createMuiTheme({
  palette: {
    common: {
      fixBlue: `${fixWhite}`,
      fixOrange: `${fixBlue}`,
    },
    primary: {
      main: `${fixWhite}`,
    },
    secondary: {
      main: `${fixBlue}`,
    },
    third: {
      main: `${fixGreen}`,
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
