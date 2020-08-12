import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Auth from './pages/auth';
import Header from './components/header';
import Footer from './components/footer';

export const Routes = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/auth' exact component={Auth} />
    </Switch>

    <Footer />
  </BrowserRouter>
);
