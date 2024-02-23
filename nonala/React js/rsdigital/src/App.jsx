import React from 'react';
import './App.css';
import Navbar from './Navbar';

export const App = () => {
  return (
    <div>
      <header>
        <nav class="navbar">
          <div class="logo">Logo</div>
          <ul class="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <Navbar/>
      <div className="photo">
        <img src="" alt="" />
      </div>
    </div>
    
  );
};
export default App;
