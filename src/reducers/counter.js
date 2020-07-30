const initialState = {
  email: "",
  name: "",
  age: "",
};
export default function counter(state = initialState, action) {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "decrement") {
    return state - 1;
  } else {
    return state;
  }
}
