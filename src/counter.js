import React from "react";
import { decrement, increment } from "./actions/counter";
import { connect } from "react-redux";
import { changeTheme } from "./actions/theme";

const Counter = (props) => {
  const { counter, increment, decrement, color, changeColor } = props;
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <button style={{ backgroundColor: color }} onClick={decrement}>
        decrement
      </button>
      <button onClick={() => changeColor("blue")}>Change Color</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  color: state.theme,
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  changeColor: (theme) => dispatch(changeTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
