import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Auth from './pages/auth';
import Header from './components/header';
import Footer from './components/footer';
import Products from './pages/products';
import Cart from './pages/cart';

export const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/auth' exact component={Auth} />
      <Route path='/cart' exact component={Cart} />
      <Route path='/products' exact component={Products} />
    </Switch>
    <Footer />
  </BrowserRouter>
);
