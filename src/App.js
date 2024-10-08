import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import HomePage from './pages/Homepage';
import MyPage from './pages/MyPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} /> {/* Route for CartPage */}
          <Route path="/mypage" element={<MyPage />} /> {/* Route for CartPage */}
          <Route path="/product/:id" element={<ProductDetailPage />} /> {/* 상품 상세 페이지 라우트 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
