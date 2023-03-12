import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import LoginReg from './components/LoginReg';
import Profile from './components/ProfilePage';
import FriendProfile from './components/FriendProfile';
import EditProfile from './components/EditProfile';
import UserFeed from './components/UserFeed';
import './App.css';

function App() {

  const [Authorized, setAuthorized] = useState("")

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<LoginReg Authorized={Authorized} setAuthorized={setAuthorized} />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/edit" element={<EditProfile/>} />
          <Route path="/profile/:id" element={<FriendProfile/>} />
          <Route path="/userfeed" element={<UserFeed/>} />
      </Routes>
    </div>
  );
}

export default App;
