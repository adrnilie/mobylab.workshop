import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Fauna from './components/faunaGallery';
import Flora from './components/floraGallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/fauna'>
          <Fauna/>
        </Route>
        <Route exact path='/flora'>
          <Flora/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
