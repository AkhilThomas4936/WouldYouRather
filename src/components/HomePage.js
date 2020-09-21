import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../components/ui/theme";
import ".././App.css";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

function HomePage(props) {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
