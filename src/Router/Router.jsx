import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../Components/Register/Register';
import Home from '../Pages/Home/Home';


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;
