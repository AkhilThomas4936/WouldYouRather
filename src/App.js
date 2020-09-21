import { Route } from "react-router-dom";
import HomePage from "../src/components/HomePage";
import QuestionDetailed from "../src/components/QuestionDetailed";

import React from "react";

export default function App() {
  return (
    <div>
      <Route exact path="/" render={() => <HomePage />} />
      <Route
        exact
        path="/questions/:questoinId"
        render={() => <QuestionDetailed />}
      />
    </div>
  );
}
