import React from 'react';
import { PassingThoughts } from './components/PassingThoughts';
import { TicTactoe } from './components/TicTactoe';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="app-body">
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/passing-thoughts' element={<PassingThoughts/>}/>
          <Route path='/tic-tac-toe' element={<TicTactoe/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
