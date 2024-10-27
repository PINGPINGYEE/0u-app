import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../LoginPage.css';

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // localStorage에서 유저 정보 가져오기
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // 가입된 정보와 입력된 정보를 비교
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setIsLoggedIn(true);
      navigate('/'); // HomePage로 이동
    } else {
      setMessage('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className="login-page">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </p>
    </div>
  );
};

export default LoginPage;
