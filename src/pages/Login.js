import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const errorStyles = error ? "visible" : "invisible";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await api.post('/api/auth/token', null, {
        auth: {
          username,
          password,
        },
      });
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('user_id', response.data.user_id);
      setUsername('');
      setPassword('');
      onLogin(); // 追加: onLoginプロップを呼び出す
      navigate('/'); // ホーム画面にリダイレクト
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        if (error.response.status === 400 && message === 'Username already exists') {
          setError('ユーザー名が既に存在します。');
        } else if (error.response.status === 401 && message === 'Email address not verified') {
          setError('メールアドレスが未確認です。');
        } else {
          setError('ログインに失敗しました。もう一度お試しください。');
        }
      } else {
        setError('サーバーに接続できませんでした。');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a2e] font-roboto">
      <div className="w-[80px] h-[80px] flex justify-center items-center mb-10 rounded-full border-2 border-[#e94560]">
        <span className="text-[#e94560] text-5xl">F</span>
      </div>
      <h2 className="text-3xl text-[#fffdff] mb-12">ようこそ</h2>
      <form onSubmit={handleLogin} className="w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-[#e0e1dd]">
            <i className="fas fa-user mr-2"></i>
            ユーザーネーム
          </label>
          <input
            className="px-3 py-2 w-full border-b-2 text-[#e0e1dd] bg-transparent border-[#0f3460] focus:border-[#e94560] outline-none transition duration-200"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-[#e0e1dd]">
            <i className="fas fa-lock mr-2"></i>
            パスワード
          </label>
          <input
            className="px-3 py-2 w-full border-b-2 text-[#e0e1dd] bg-transparent border-[#0f3460] focus:border-[#e94560] outline-none transition duration-200"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={`flex items-center justify-between ${errorStyles}`}>
          <span className="text-sm text-[#e94560]">{error}</span>
          <span
            className="fas fa-times-circle text-[#e94560] cursor-pointer"
            onClick={() => setError("")}
          ></span>
        </div>
        <button
          type="submit"
          className="bg-[#0f3460] text-[#e0e1dd] py-2 rounded w-full mt-4 mb-6 transition duration-200 hover:bg-[#16213e]"
        >
          Log In
        </button>
      </form>
      <a
        href="#"
        className="text-[#e0e1dd] hover:text-[#e94560] transition duration-200"
      >
        Forgot your password?
      </a>
      <p className="text-[#e0e1dd] mt-6">
        Don't have an account?{" "}
        <a href="#" className="hover:text-[#e94560] transition duration-200">
          Create one
        </a>
      </p>
    </div>
  );
}

export default Login;