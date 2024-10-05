import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaBell, FaUser } from 'react-icons/fa'; // 아이콘 사용
import '../Header.css';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="left-menu">
          <FaBars className="menu-icon" />
        </div>
        <div className="logo">
          <Link to="/">0U</Link>
        </div>
        <div className="right-menu">
          <FaShoppingCart className="icon" />
          <FaBell className="icon" />
          <FaUser className="icon" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
