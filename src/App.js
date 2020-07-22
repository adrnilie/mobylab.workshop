import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Fauna from './components/fauna';
import Flora from './components/flora';
import Header from './components/header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/fauna'>
            <Fauna />
          </Route>
          <Route exact path='/flora'>
            <Flora />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
