import logged from './auth';
import { combineReducers } from 'redux';
import products from './products';

export const reducer = combineReducers({
  logged,
  products
});
