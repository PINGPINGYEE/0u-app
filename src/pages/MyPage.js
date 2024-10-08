import React from 'react';
import '../MyPage.css';
import ProfileImage from '../image/profile-icon.png'; // 프로필 이미지 추가
import Sony from '../image/recommend-product/sony-headphone.jpeg';
import Dyson from '../image/recommend-product/dyson-vacuum.png';
import Gopro from '../image/recommend-product/gopro-hero.jpg';

function MyPage() {
  const nickname = '킹왕짱'; // 닉네임
  const points = '10,000₩'; // 적립금

  // 대여중인 물품
  const rentedItems = [
    { id: 1, title: 'Nike Air Max 270', rentalPeriod: '2024-10-09 ~ 2024-10-12', remainingDays: 3 },
    { id: 2, title: 'Apple MacBook Pro', rentalPeriod: '2024-10-11 ~ 2024-10-15', remainingDays: 5 },
    { id: 3, title: 'Canon EOS R5 Camera', rentalPeriod: '2024-10-10 ~ 2024-10-13', remainingDays: 4 },
  ];

  // 관심있는 물품
  const favoriteItems = [
    { id: 1, title: 'Sony WH-1000XM4 Headphones', imgSrc: Sony },
    { id: 2, title: 'Dyson V11 Vacuum Cleaner', imgSrc: Dyson },
    { id: 3, title: 'GoPro HERO9 Black', imgSrc: Gopro },
  ];

  return (
    <div className="mypage">
      <div className="profile-section">
        <img src={ProfileImage} alt="Profile" className="profile-image" /> {/* 프로필 이미지 */}
        <div className="profile-details">
          <p><strong>닉네임 </strong> {nickname}</p>
          <p><strong>적립금 </strong> {points}</p>
        </div>
      </div>

      <div className="my-links">
        <button className="my-button">주문내역</button>
        <button className="my-button">고객센터</button>
      </div>

      <h2>대여중인 물품</h2>
      <div className="rented-items-list">
        {rentedItems.map(item => (
          <div key={item.id} className="rented-item">
            <h3>{item.title}</h3>
            <p>대여기간: {item.rentalPeriod}</p>
            <p>남은 기간: {item.remainingDays}일</p>
          </div>
        ))}
      </div>

      <h2>관심있는 상품</h2>
      <div className="favorite-items-list">
        {favoriteItems.map(item => (
          <div key={item.id} className="favorite-item">
            <img src={item.imgSrc} alt={item.title} className="favorite-item-image" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPage;
