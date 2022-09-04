import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseStateToDelete from './Components/UseStateToDelete/UseStateToDelete'
import Booleann from './Components/UseStateAsBoolean/Boolean'
import Props from './Components/Props/Props';
import Modal from './Components/Modal/Modal';

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
      <Modal>
        <h2>10% off coupon code</h2>
        <p>Use the code Ninja jay</p>
      </Modal>
    </div>
    </Router>
  );
}

export default App;
