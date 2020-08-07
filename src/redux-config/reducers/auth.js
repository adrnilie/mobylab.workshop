import { ACTION_TYPES } from '../action-types';
import { setIsLogged, removeIsLogged } from '../../getLocalData';

const intialState = false;
export default function auth(state = intialState, action) {
	if (action.type === ACTION_TYPES.LOGIN) {
		setIsLogged();
		return true;
	}
	if (action.type === ACTION_TYPES.LOGOUT) {
		removeIsLogged();
		return intialState;
	}
	return state;
}
