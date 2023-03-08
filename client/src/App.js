import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './component/Login';
import Registration from './component/Registration';
import Profile from './component/ProfilePage';
import FriendProfile from './component/FriendProfile';
import EditProfile from './component/EditProfile';
import UserFeed from './component/UserFeed';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Registration" element={<Registration/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/EditProfile" element={<EditProfile/>} />
          <Route path="/Profile/:id" element={<FriendProfile/>} />
          <Route path="/UserFeed" element={<UserFeed/>} />
      </Routes>
    </div>
  );
}

export default App;
