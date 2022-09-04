import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseStateToDelete from './Components/UseStateToDelete/UseStateToDelete'
import Booleann from './Components/UseStateAsBoolean/Boolean'
import Props from './Components/Props/Props';

function App() {
  const title = 'Hello There'
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<UseStateToDelete/>} />
        <Route path='/boolean' element={<Booleann />} />
      </Routes>
      
      {/* using props exmpl */}
      <Props title={title} name='jugurta'></Props>
    </div>
    </Router>
  );
}

export default App;
