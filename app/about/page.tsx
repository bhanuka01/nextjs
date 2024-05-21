"use client";
import { Button, ButtonGroup } from "@nextui-org/button";
import React, { useState } from 'react';
import { Input } from "@nextui-org/input";



const Page: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        if (inputValue === '123') {
            window.location.href = 'https://www.google.com';
        } else {
            // alert('Please type "123" to be redirected to Google');
            window.location.href = 'https://www.youtube.com';
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

            <Input
                type="text"
                value={inputValue}
                color="warning"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                label="Number" className="max-w-[220px]"


            />
            <Button onClick={handleSubmit} color="primary" >
                Go
            </Button>


            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

            </div>
        </div>
    );
};

export default Page;
