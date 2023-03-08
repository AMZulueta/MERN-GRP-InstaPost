import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './component/Login';
import Registration from './component/Registration';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Registration" element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
