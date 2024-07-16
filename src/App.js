import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import File from './pages/File';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1" style={{ position: 'relative' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/file" element={<File />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Header() {
  const location = useLocation();
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-2xl tracking-wide">
          AIチャットボット管理
        </div>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-gray-200">
                質問と回答
              </Link>
            </li>
            <li>
              <Link to="/file" className="hover:text-gray-200">
                アップロード
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-200">
                ドキュメント
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative">
          <img
            src="user-icon.jpg"
            alt="User profile icon"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </header>
  );
}
export default App;
