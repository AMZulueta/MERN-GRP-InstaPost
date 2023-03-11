import { Routes, Route } from 'react-router-dom';
import React from 'react';
import LoginReg from './components/LoginReg';
import Profile from './components/ProfilePage';
import FriendProfile from './components/FriendProfile';
import EditProfile from './components/EditProfile';
import UserFeed from './components/UserFeed';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<LoginReg/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/EditProfile" element={<EditProfile/>} />
          <Route path="/Profile/:id" element={<FriendProfile/>} />
          <Route path="/UserFeed" element={<UserFeed/>} />
      </Routes>
    </div>
  );
}

export default App;
