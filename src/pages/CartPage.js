import React from 'react';
import '../CartPage.css';
import { FaTrashAlt } from 'react-icons/fa'; // 아이콘 사용
import Canon from '../image/recommend-product/canon-camera.jpeg';
import Macbook from '../image/recommend-product/macbook-pro.jpeg';
import Nike from '../image/recommend-product/nike-air.jpg';


function CartPage() {
  const cartItems = [
    { id: 1, title: 'Nike Air Max 270', price: '10,000₩', imgSrc: Nike, rentalPeriod: '2024-10-09 ~ 2024-10-12', days: 3 },
    { id: 2, title: 'Apple MacBook Pro', price: '50,000₩', imgSrc: Macbook, rentalPeriod: '2024-10-11 ~ 2024-10-15', days: 5 },
    { id: 3, title: 'Canon EOS R5 Camera', price: '30,000₩', imgSrc: Canon, rentalPeriod: '2024-10-10 ~ 2024-10-13', days: 4 },
  ];

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgSrc} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.title}</h2>
              <p className="price">{item.price}</p>
              <p className="rental-period">{item.rentalPeriod} ({item.days}일간)</p> {/* 대여 기간 추가 */}
            </div>
            <FaTrashAlt className="delete-icon" />
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>총합계</h3>
        <p>90,000₩</p>
        <button className="checkout-button">결제하기</button>
      </div>
    </div>
  );
}

export default CartPage;
