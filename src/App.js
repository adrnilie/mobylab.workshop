import React, { useEffect } from 'react';
import { Routes } from './routes';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { getLogged } from './storageService/storage';
import { login } from './redux/actions/auth';

function App() {
  useEffect(() => {
    if (getLogged()) {
      store.dispatch(login());
    }
  }, []);
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
