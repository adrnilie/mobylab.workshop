const storage = localStorage;

export const getLogged = () => {
  return storage.getItem('isLogged');
};

export const setLogged = () => {
  storage.setItem('isLogged', true);
};

export const removeLogged = () => {
  storage.removeItem('isLogged');
};
