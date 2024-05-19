"use client";
import {Button, ButtonGroup} from "@nextui-org/button";
import React, { useState } from 'react';
import {Input} from "@nextui-org/input";
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
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      {/* <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder=" Google"
      /> */}
      <Input type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        label="Email" className=""/>
      <Button onClick={handleSubmit} color="primary">
      Button
    </Button>
      {/* <button onClick={handleSubmit} className='text-white'>Submit</button> */}

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      {/* <Input type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        label="Email" className="w-30"/> */}
      {/* <Input type="email" label="Email" placeholder="Enter your email" /> */}
    </div>
    </div>
  );
};

export default Page;
