import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./counter";
import ShowCounter from "./showCounter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShowCounter />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
