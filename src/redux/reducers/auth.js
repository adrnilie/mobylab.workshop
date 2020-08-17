import { ACTIONS } from '../actions';
import { setLogged, removeLogged } from '../../storageService/storage';

const initialState = false;
export default function auth(state = initialState, action) {
  if (action.type === ACTIONS.LOGIN) {
    setLogged();
    return true;
  }
  if (action.type === ACTIONS.LOGOUT) {
    removeLogged();
    return false;
  }
  return state;
}
