import { Route } from "react-router-dom";
import HomePage from "../src/components/HomePage";
import QuestionDetailed from "../src/components/QuestionDetailed";
import QuestionResult from "../src/components/QuestionResult";

import React from "react";

export default function App() {
  return (
    <div>
      <Route exact path="/" render={() => <HomePage />} />
      <Route
        exact
        path="/questions/:questionId"
        render={(props) => <QuestionDetailed {...props} />}
      />
      <Route
        exact
        path="/questions/questionResult"
        render={() => <QuestionResult />}
      />
    </div>
  );
}
