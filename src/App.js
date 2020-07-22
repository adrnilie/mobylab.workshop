import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.scss";
import Welcome from "./components/Welcome";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShow(s => (s = !s))}>
        Toggle Welcome!
      </button>

      {show && <Welcome />}
    </>
  );
};

export default App;
