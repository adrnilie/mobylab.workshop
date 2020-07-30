const initialState = "pink";
export default function counter(state = initialState, action) {
  if (action.type === "changeColor") {
    return action.payload;
  } else {
    return state;
  }
}
