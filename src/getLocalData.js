export const getIsLogged = () => {
	return localStorage.getItem('isLogged');
};

export const setIsLogged = () => {
	localStorage.setItem('isLogged', true);
};

export const removeIsLogged = () => {
	localStorage.removeItem('isLogged');
};
