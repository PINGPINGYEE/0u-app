import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductDetailPage.css'; // 상품 상세 페이지 CSS 파일
import Nike from '../image/recommend-product/nike-air.jpg';

function ProductDetailPage() {
  const { id } = useParams(); // URL에서 상품 ID를 가져옴

  // 예시 상품 데이터
  const product = {
    id: 1,
    title: 'Nike Air Max 270',
    price: '20,000₩',
    description: 'Nike Air Max 270는 편안한 착용감과 스타일리시한 디자인을 제공하는 인기 운동화입니다.',
    seller: '판매자123',
    imgSrc: Nike,
    rentalPeriod: '2024-10-10 ~ 2024-10-13', // 대여 기간 추가
  };

  // 기본 메시지 추가
  const [messages, setMessages] = useState([
    { sender: '나', text: '안녕하세요 상품보고 연락드립니다.' },
    { sender: '판매자', text: '네! 문의주셔서 감사합니다.' }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: '나', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="product-detail-page">
      <div className="product-info">
        <img src={product.imgSrc} alt={product.title} className="product-image" />
        <div className="product-details">
          <h1>{product.title}</h1>
          <p className="price">{product.price}</p>
          <p><strong>판매자:</strong> {product.seller}</p>
          <p><strong>대여기간:</strong> {product.rentalPeriod}</p> {/* 대여 기간 표시 */}
        </div>
      </div>

      <div className="product-description">
        <p>{product.description}</p>
      </div>

      <div className="purchase-section">
        <button className="purchase-button">구매하기</button>
        <button className="cart-button">장바구니 담기</button>
      </div>

      <div className="chat-section">
        <h2>판매자와 채팅</h2>
        <div className="chat-box">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.sender === '나' ? 'my-message' : 'seller-message'}`}
            >
              {message.sender === '나' ? (
                <div className="my-message">
                  <strong>{message.sender}</strong> {message.text}
                </div>
              ) : (
                <div className="seller-message">
                  <strong>{message.sender}</strong> {message.text}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="메시지를 입력하세요..."
          />
          <button onClick={handleSendMessage}>보내기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
