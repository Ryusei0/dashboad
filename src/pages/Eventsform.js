import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function EventForm() {
  const [title, setTitle] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [category, setCategory] = useState('');
  const [details, setDetails] = useState('');
  const [max, setMax] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [deadline, setDeadline] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const eventData = {
        companyname,
        title,
        category,
        details,
        max,
        start_time: startTime,
        end_time: endTime,
        deadline,
        location,
        image,
      };
      await api.post('/api/events', eventData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
      });
      navigate('/events');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            イベント情報作成
          </h2>
          <form className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="companyname"
                className="block text-sm font-medium text-gray-700"
              >
                会社名
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="companyname"
                  id="companyname"
                  value={companyname} 
                  onChange={(e) => setCompanyname(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                タイトル
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                カテゴリー
              </label>
              <div className="mt-1">
                <select
                  id="category"
                  name="category"
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option>説明会</option>
                  <option>イベント</option>
                  <option>宣伝</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                サムネイル
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700"
              >
                詳細
              </label>
              <div className="mt-1">
                <textarea
                  id="details"
                  name="details"
                  rows="3"
                  value={details} 
                  onChange={(e) => setDetails(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="max"
                className="block text-sm font-medium text-gray-700"
              >
                定員
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="max"
                  id="max"
                  value={max} 
                  onChange={(e) => setMax(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="deadline"
                className="block text-sm font-medium text-gray-700"
              >
                開始日
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  value={startTime} 
                  onChange={(e) => setStartTime(e.target.value)} 
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="deadline"
                className="block text-sm font-medium text-gray-700"
              >
                終了日
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  value={endTime} 
                  onChange={(e) => setEndTime(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="deadline"
                className="block text-sm font-medium text-gray-700"
              >
                申込期限
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  value={deadline} 
                  onChange={(e) => setDeadline(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                開催場所
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </form>
        </div>
  );
}

export default EventForm;