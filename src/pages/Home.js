"use client";
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/index.css';

function Home() {
  const [questions, setQuestions] = useState([]);
  const [sortBy, setSortBy] = useState("timestamp");
  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

   // Function to fetch questions based on current search conditions
   const fetchQuestions = async () => {
    try {
      const response = await api.get('/api/azureconversations', {
        params: {
          user_id: "user_local",
          keyword: keyword,
          sort_by: sortBy,
          start_date: startDate,
          end_date: endDate,
        },
      });
      setQuestions(response.data);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []); 

  const handleSearch = () => {
    console.log("Search triggered");
    fetchQuestions();  // Fetch the updated data
    setKeyword("");    // Clear the keyword input after the search
  };


  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main className="container mx-auto mt-0" >
        <div className="mb-8 pt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">質問と回答</h2>
            <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="キーワード検索"
              className="border px-3 py-2 rounded-lg shadow-sm mr-4"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={handleSearch}
            >
              検索
            </button>
          </div>
            <div>
              <label htmlFor="sort" className="font-bold">
                ソート:
              </label>
              <select
                id="sort"
                className="border ml-2 px-3 py-2 rounded-lg shadow-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date">日付</option>
                <option value="importance">重要度</option>
              </select>
            </div>
          </div>
          <ul className="space-y-6">
            {questions.map((item) => (
              <li key={item.id} className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-xl font-bold mb-2">質問：{item.question}</p>
                <p className="text-lg">回答：{item.answer}</p>
                <p className="text-gray-500 mt-4">{item.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            &copy; 2024 AIチャットボット管理. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;