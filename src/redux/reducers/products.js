import { ACTIONS } from '../actions';

const initialState = [];
export default function products(state = initialState, action) {
  if (action.type === ACTIONS.UPDATE_PRODUCTS) {
    return action.payload;
  }

  return state;
}
