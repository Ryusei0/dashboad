"use client";
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/index.css';
import EventForm from './Eventsform';

function File() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const handleFileDelete = (fileToDelete) => {
    setFiles(files.filter((file) => file !== fileToDelete));
  };



  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main className="container mx-auto pt-8 pb-8" >
      <div className="mt-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            ファイルアップロード
          </h2>
          <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>ファイルをアップロード</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">または、ドラッグ&ドロップ</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF, PDF, TXT up to 10MB
              </p>
            </div>
            <input
              id="file"
              type="file"
              className="hidden"
              multiple
              onChange={handleFileUpload}
            />
          </div>
          <ul className="mt-6 space-y-4">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-md p-4 rounded-md"
              >
                <span className="text-lg">{file.name}</span>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
                  onClick={() => handleFileDelete(file)}
                >
                  <i className="fas fa-trash-alt mr-2"></i>削除
                </button>
              </li>
            ))}
          </ul>
        </div>
        <EventForm/>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            &copy; 2023 AIチャットボット管理. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default File;