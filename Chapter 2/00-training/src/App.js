import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseStateToDelete from './Components/UseStateToDelete/UseStateToDelete'
import Booleann from './Components/UseStateAsBoolean/Boolean'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<UseStateToDelete/>} />
        <Route path='/boolean' element={<Booleann />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
