import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 페이지 이동을 위해 useNavigate 사용
import { FaBars, FaTimes } from 'react-icons/fa'; // 햄버거와 닫기 아이콘 사용
import '../Header.css';
import '../App.css';
import Cart from '../image/cart-icon.png';
import Profile from '../image/profile-icon.png';
import Alarm from '../image/alarm-icon.png'; // 알람 아이콘 이미지 불러오기

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 열기/닫기
  };

  const handleNotificationClick = () => {
    setIsDropdownOpen(false); // 드롭다운 닫기
    navigate('/product/1'); // 상품 상세 페이지로 이동 (예시 ID 사용)
  };

  const categories = [
    '의류', '재능나눔', '이동수단', '전자기기', '유아용품',
    '원예도구', '캠핑', '수공구', '운동용품', '파티용품',
    '도서', '가정용품', '기타'
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <div className="left-menu" onClick={toggleMenu}>
          <FaBars className="menu-icon" />
        </div>
        <div className="logo">
          <Link to="/">0U</Link>
        </div>
        <div className="right-menu">
          <Link to="/cart"><img src={Cart} alt="Cart" className="icon" /></Link>
          <div className="notification-wrapper">
            <img
              src={Alarm}
              alt="Alarm"
              className="icon"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <p onClick={handleNotificationClick}>
                  Nike Air Max 270 상품의 답장이 왔습니다.
                </p>
              </div>
            )}
          </div>
          <Link to="/mypage"><img src={Profile} alt="Profile" className="icon" /></Link>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="overlay">
          <div className="side-menu">
            <div className="close-button" onClick={toggleMenu}>
              <FaTimes />
            </div>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="side-menu-item">
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="검색어를 입력하세요..."
        />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
}

export default Header;
