import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = (props) => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
