import { ACTION_TYPES } from '../action-types';

export const login = () => ({
	type: ACTION_TYPES.LOGIN,
});

export const logout = () => ({
	type: ACTION_TYPES.LOGOUT,
});
