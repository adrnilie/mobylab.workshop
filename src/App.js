import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import Header from './header';
import Login from './loginForm';
import { Provider } from 'react-redux';
import store from './redux-config/store';
import { login } from './redux-config/actions/auth';
import { getIsLogged } from './getLocalData';

function App() {
	useEffect(() => {
		if (getIsLogged()) {
			store.dispatch(login());
		}
	}, []);
	return (
		<Provider store={store}>
			<div className='App'>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path='/' exact component={() => <Home />} />
						<Route path='/login' exact component={() => <Login />} />
					</Switch>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
