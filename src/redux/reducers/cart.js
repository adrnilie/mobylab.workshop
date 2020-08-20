import { ACTIONS } from '../actions';

const initialState = [];
export default function cart(state = initialState, action) {
  if (action.type === ACTIONS.ADD_PRODUCT) {
    return state.concat([action.payload]);
  }
  if (action.type === ACTIONS.REMOVE_PRODUCT) {
    return state.slice().filter(entry => entry !== action.payload);
  }

  return state;
}
