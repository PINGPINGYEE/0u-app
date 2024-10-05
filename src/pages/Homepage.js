import React from 'react';
import '../HomePage.css';
import '../App.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="검색어를 입력하세요..."
        />
        <button className="search-button">Search</button>
      </div>
      <div className="hero-section">
        <h1>0U - 공유와 재사용을 통한 지속 가능한 생활</h1>
        <p>불필요한 자원을 공유하고 환경을 보호하세요. 0U와 함께 더 나은 지구를 만듭시다.</p>
        <button className="cta-button">지금 시작하기</button>
      </div>
    </div>
  );
}

export default HomePage;
