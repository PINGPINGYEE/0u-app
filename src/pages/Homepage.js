import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';
import '../App.css';
import Magazine from '../image/daily-magazine.jpg'; // 매거진 이미지 경로
import Canon from '../image/recommend-product/canon-camera.jpeg';
import Macbook from '../image/recommend-product/macbook-pro.jpeg';
import Nike from '../image/recommend-product/nike-air.jpg';
import Northface from '../image/recommend-product/northface-tent.jpeg';
import Patagonia from '../image/recommend-product/patagonia-jacket.jpeg';
import Sony from '../image/recommend-product/sony-headphone.jpeg';
import Galaxy from '../image/recommend-product/galaxy-phone.jpg';
import Dyson from '../image/recommend-product/dyson-vacuum.png';
import Gopro from '../image/recommend-product/gopro-hero.jpg';
import { FaHeart } from 'react-icons/fa'; // 하트 아이콘

function HomePage() {
  const recommendations = [
    { id: 1, title: 'Nike Air Max 270', price: '10,000₩', rentalPeriod: '2024-10-10 ~ 2024-10-13', imgSrc: Nike },
    { id: 2, title: 'Apple MacBook Pro', price: '50,000₩', rentalPeriod: '2024-10-11 ~ 2024-10-15', imgSrc: Macbook },
    { id: 3, title: 'Canon EOS R5 Camera', price: '30,000₩', rentalPeriod: '2024-10-12 ~ 2024-10-14', imgSrc: Canon },
    { id: 4, title: 'Sony WH-1000XM4 Headphones', price: '10,000₩', rentalPeriod: '2024-10-15 ~ 2024-10-18', imgSrc: Sony },
    { id: 5, title: 'Patagonia Jacket', price: '15,000₩', rentalPeriod: '2024-10-09 ~ 2024-10-12', imgSrc: Patagonia },
    { id: 6, title: 'The North Face Tent', price: '25,000₩', rentalPeriod: '2024-10-10 ~ 2024-10-13', imgSrc: Northface },
  ];

  // 내가 올린 상품 (새로운 상품 추가)
  const myProducts = [
    { id: 1, title: 'Samsung Galaxy S21', price: '50,000₩', rentalPeriod: '2024-10-11 ~ 2024-10-14', imgSrc: Galaxy },
    { id: 2, title: 'Dyson V11 Vacuum Cleaner', price: '80,000₩', rentalPeriod: '2024-10-12 ~ 2024-10-15', imgSrc: Dyson },
    { id: 3, title: 'GoPro HERO9 Black', price: '45,000₩', rentalPeriod: '2024-10-13 ~ 2024-10-16', imgSrc: Gopro },
  ];

  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (id) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter(item => item !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };

  // 대여 기간을 계산하는 함수
  const calculateRentalDays = (rentalPeriod) => {
    const [start, end] = rentalPeriod.split(' ~ ');
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate - startDate;
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 일수 계산
    return dayDiff + 1; // 시작일과 종료일을 포함
  };

  return (
    <div className="homepage">
      <div className="magazine-banner">
        <img src={Magazine} alt="Daily Magazine" className="magazine-image" />
      </div>

      {/* 추천 상품 섹션 */}
      <div className="recommendation-section">
        <div className="recommendation-header">
          <h2>오늘의 추천 상품</h2>
          <span className="view-more-link">더보기 &gt;</span>
        </div>
        <div className="recommendation-list">
          {recommendations.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="recommendation-item-link">
              <div className="recommendation-item">
                <FaHeart
                  className={`heart-icon ${likedItems.includes(item.id) ? 'liked' : ''}`}
                  onClick={() => toggleLike(item.id)}
                />
                <img src={item.imgSrc} alt={item.title} className="recommendation-image" />
                <p>{item.title}</p>
                <p className="price">{item.price}</p>
                <p className="rental-period">
                  대여기간: {item.rentalPeriod} (4일간) {/* 대여기간 및 일수 표시 */}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 내가 올린 상품 섹션 */}
      <div className="recommendation-section">
        <div className="recommendation-header">
          <h2>내가 올린 상품</h2>
          <span className="view-more-link">더보기 &gt;</span>
        </div>
        <div className="recommendation-list">
          {myProducts.length > 0 ? (
            myProducts.map((item) => (
              <div key={item.id} className="recommendation-item">
                <FaHeart
                  className={`heart-icon ${likedItems.includes(item.id) ? 'liked' : ''}`}
                  onClick={() => toggleLike(item.id)}
                />
                <img src={item.imgSrc} alt={item.title} className="recommendation-image" />
                <p>{item.title}</p>
                <p className="price">{item.price}</p> {/* 가격 표시 */}
                <p className="rental-period">
                  대여기간: {item.rentalPeriod} ({calculateRentalDays(item.rentalPeriod)}일간) {/* 대여기간 및 일수 표시 */}
                </p>
              </div>
            ))
          ) : (
            <p>내가 올린 상품이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
