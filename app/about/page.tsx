"use client";

import React, { useState } from 'react';

const Page: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === '123') {
      window.location.href = 'https://www.google.com';
    } else {
      alert('Please type "123" to be redirected to Google');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder=" Google"
      />
      <button onClick={handleSubmit} className='text-white'>Submit</button>
    </div>
  );
};

export default Page;
