import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyProvider } from './context';
import Counter from './counter';

function App() {
  return (
    <MyProvider>
    <div className="App">
     <Counter/>
    </div>
    </MyProvider>
  );
}

export default App;
