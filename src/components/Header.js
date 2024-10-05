import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // 햄버거 메뉴 아이콘 사용
import '../Header.css';
import '../App.css';
import Alarm from '../image/alarm-icon.png';
import Cart from '../image/cart-icon.png';
import Profile from '../image/profile-icon.png';

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
          <img src={Cart} alt="Cart" className="icon" />
          
          <img src={Profile} alt="Profile" className="icon" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
