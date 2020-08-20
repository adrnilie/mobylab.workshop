import logged from './auth';
import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';

export const reducer = combineReducers({
  logged,
  cart,
  products
});
