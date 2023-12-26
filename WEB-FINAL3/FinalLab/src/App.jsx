
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/rockets" activeClassName="active">
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink to="/missions" activeClassName="active">
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink to="/myprofile" activeClassName="active">
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return <h2>Home</h2>;
};

export default App;
