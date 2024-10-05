import React from 'react';
import { FaTree } from 'react-icons/fa'; // 나무 모양 아이콘 사용
import '../HomePage.css';
import '../App.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="intro-banner">
        <FaTree className="tree-icon" /> {/* 나무 모양 아이콘 */}
        <p className="intro-description" style={{ color:'black' }}>
          오늘 <span className="highlight">3000명</span> 사람들이 동참했어요.
        </p>
      </div>
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="검색어를 입력하세요..."
        />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default HomePage;
