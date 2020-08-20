import { ACTIONS } from '../actions';

export const addProduct = data => ({
  type: ACTIONS.ADD_PRODUCT,
  payload: data
});

export const removeProduct = data => ({
  type: ACTIONS.REMOVE_PRODUCT,
  payload: data
});
