// src/App.js or src/index.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './Login';

function App() {
  return (
    <Router>
    
      <Routes>
       
        <Route exact path="/login" element={<Login/>}/>
      </Routes>

  </Router>

  );
}

export default App;
