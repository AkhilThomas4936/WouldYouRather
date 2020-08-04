import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import middleware from "./middleware/index";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>,
  document.getElementById("root")
);
